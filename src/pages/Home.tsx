import { useContext } from "react"

import DashboardData from "../components/DashboardData"
import DashboardTable from "../components/DashboardTable"
import NoItems from "../components/NoItems"

import StorageDataContext from "../contexts/StorageData"

import getOrganizedHomeData from "../utils/getOrganizedHomeData"

export default function Home() {
  const [items] = useContext(StorageDataContext)

  if (!items.length) {
    return (
      <>
        <h1 className="text-5xl font-thin">Dashboard</h1>
        <NoItems />
      </>
    )
  }

  const {
    differentKindsOfItems,
    recentDashboardTableScheme,
    recentItemsAmount,
    runningOutDashboardTableScheme,
    runningOutItemsAmount,
    totalOfItems,
  } = getOrganizedHomeData(items)

  return (
    <>
      <h1 className="text-5xl font-thin">Dashboard</h1>
      <section className="grid grid-cols-4 gap-6">
        <DashboardData title="Diversidade de itens" data={differentKindsOfItems} />
        <DashboardData title="Inventário total" data={totalOfItems} />
        <DashboardData title="Itens recentes" data={recentItemsAmount} />
        <DashboardData title="Itens acabando" data={runningOutItemsAmount} />
      </section>
      <section className="grid grid-cols-2 gap-6 items-start">
        <DashboardTable {...recentDashboardTableScheme} />
        <DashboardTable {...runningOutDashboardTableScheme} />
      </section>
    </>
  )
}
