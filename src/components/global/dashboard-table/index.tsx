import TableBody from "./table-body"
import TableHead from "./TableHead"

import { DashboardTableDataContext } from "../../../contexts/DashboardTableDataContext"

import DashboardTableData from "../../../types/dashboard-table-data"

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
    <div className="relative">
      <div className="absolute grid w-full overflow-auto">
        <table>
          <DashboardTableDataContext.Provider value={{ titles, data }}>
            <TableHead />
            <TableBody moreActions={moreActions} />
          </DashboardTableDataContext.Provider>
        </table>
      </div>
    </div>
  )
}
