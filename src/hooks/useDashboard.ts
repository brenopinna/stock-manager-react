import { useContext } from "react"

import DataContext from "../contexts/DataContext"

import DashboardTableData from "../types/dashboard-table-data"

export default function useDashboard(): DashboardTableData | null {
  const [items] = useContext(DataContext)

  if (!items.length) {
    return null
  }

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
