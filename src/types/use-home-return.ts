import DashboardTableData from "./dashboard-table-data"

export default interface useHomeReturn {
  recentDashboardTableScheme: DashboardTableData
  runningOutDashboardTableScheme: DashboardTableData
  differentKindsOfItems: number
  totalOfItems: number
  recentItemsAmount: number
  runningOutItemsAmount: number
}
