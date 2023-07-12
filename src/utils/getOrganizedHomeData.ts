import dayjs from "dayjs"

import Data from "../types/data"

import getRecentDashboardScheme from "./getRecentDashboardScheme"
import getRunningOutDashboardScheme from "./getRunningOutDashboardScheme"
import DashboardTableData from "../types/dashboard-table-data"

interface getOrganizedDataReturnType {
  recentDashboardTableScheme: DashboardTableData
  runningOutDashboardTableScheme: DashboardTableData
  differentKindsOfItems: number
  totalOfItems: number
  recentItemsAmount: number
  runningOutItemsAmount: number
}

export default function getOrganizedHomeData(items: Data): getOrganizedDataReturnType {
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
    recentDashboardTableScheme,
    runningOutDashboardTableScheme,
    differentKindsOfItems,
    totalOfItems,
    recentItemsAmount,
    runningOutItemsAmount,
  }
}
