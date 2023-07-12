import TableBody from "./TableBody"
import TableHead from "./TableHead"

import { DashboardTableDataContext } from "../../contexts/DashboardTableData"

import DashboardTableData from "../../types/dashboard-table-data"

interface DashboardTableProps extends DashboardTableData {
  moreActions?: boolean
}

export default function DashboardTable({
  titles,
  moreActions,
  data,
}: DashboardTableProps) {
  if (!data.length) {
    return
  }

  return (
    <table>
      <DashboardTableDataContext.Provider value={{ titles, data }}>
        <TableHead />
        <TableBody moreActions={moreActions} />
      </DashboardTableDataContext.Provider>
    </table>
  )
}
