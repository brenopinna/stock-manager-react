import DashboardTableData from "../types/dashboard-table-data"
import Data from "../types/data"

export default function getRunningOutDashboardScheme(items: Data): DashboardTableData {
  return {
    titles: [
      { text: "Itens acabando", relatedTo: "name" },
      { text: "Qtd.", relatedTo: "amount" },
    ],
    data: items,
  }
}
