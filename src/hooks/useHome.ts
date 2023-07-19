import { useContext } from "react"

import dayjs from "dayjs"

import DashboardTableData from "../types/dashboard-table-data"
import Data from "../types/data"
import useHomeReturn from "../types/use-home-return"

import DataContext from "../contexts/DataContext"

export default function useHome(): useHomeReturn | null {
  const [items] = useContext(DataContext)

  if (!items.length) {
    return null
  }

  const recentItems = items.filter((item) => {
    if (dayjs(item.createdAt).diff(dayjs(), "days") <= 10) {
      return item
    }
  })

  const runningOutItems = items.filter((item) => {
    if (item.amount < 10) {
      return item
    }
  })

  const recentDashboardTableScheme = getRecentDashboardScheme(recentItems)
  const runningOutDashboardTableScheme = getRunningOutDashboardScheme(runningOutItems)

  const differentKindsOfItems = items.length
  const totalOfItems = items.reduce((acc, data) => (acc += data.amount), 0)
  const recentItemsAmount = recentItems.length
  const runningOutItemsAmount = runningOutItems.length

  return {
    differentKindsOfItems,
    recentDashboardTableScheme,
    recentItemsAmount,
    runningOutDashboardTableScheme,
    runningOutItemsAmount,
    totalOfItems,
  }
}

function getRecentDashboardScheme(items: Data): DashboardTableData {
  return {
    titles: [{ text: "Itens Recentes", relatedTo: "name" }],
    data: items,
  }
}

function getRunningOutDashboardScheme(items: Data): DashboardTableData {
  return {
    titles: [
      { text: "Itens acabando", relatedTo: "name" },
      { text: "Qtd.", relatedTo: "amount" },
    ],
    data: items,
  }
}
