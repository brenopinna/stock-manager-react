import DashboardTableData from "../types/dashboard-table-data"
import Data from "../types/data"

export default function getRecentDashboardScheme(items: Data): DashboardTableData {
  return {
    titles: [{ text: "Itens Recentes", relatedTo: "name" }],
    data: items,
  }
}
