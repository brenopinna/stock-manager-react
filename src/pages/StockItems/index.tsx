import DashboardTable from "../../components/DashboardTable"
import NoItems from "../../components/NoItems"

import getAllItemsDashboardScheme from "../../utils/getAllItemsDashboardScheme"

import StorageDataContext from "../../contexts/StorageData"

import { useContext } from "react"

export default function Items() {
  const [items] = useContext(StorageDataContext)

  if (!items.length) {
    return <NoItems />
  }

  const allItemsDashboardScheme = getAllItemsDashboardScheme(items)

  return <DashboardTable {...allItemsDashboardScheme} moreActions />
}
