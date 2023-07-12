import DashboardTableData from "../types/dashboard-table-data"
import Data from "../types/data"

export default function getAllItemsDashboardScheme(items: Data): DashboardTableData {
  return {
    titles: [
      { text: "ID", relatedTo: "id" },
      { text: "Nome", relatedTo: "name" },
      { text: "Em Estoque", relatedTo: "amount" },
      { text: "Categoria", relatedTo: "category" },
    ],
    data: items,
  }
}
