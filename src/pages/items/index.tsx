import DashboardTable from "../../components/global/dashboard-table"
import NoItems from "../../components/global/NoItems"

import useDashboard from "../../hooks/useDashboard"

export default function Items() {
  const dashboardScheme = useDashboard()

  if (!dashboardScheme) {
    return <NoItems />
  }

  return <DashboardTable {...dashboardScheme} moreActions />
}
