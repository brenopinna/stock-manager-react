import { useContext } from "react"

import ItemData from "../../../../types/item-data"

import { DashboardTableDataContext } from "../../../../contexts/DashboardTableDataContext"
import TableBodyRow from "./TableBodyRow"

interface TableBodyProps {
  moreActions?: boolean
}

export default function TableBody({ moreActions }: TableBodyProps) {
  const { titles, data } = useContext(DashboardTableDataContext)

  const titlesRelatedTo = titles.reduce((acc: string[], title) => {
    acc.push(title.relatedTo)
    return acc
  }, [])

  const rows = data.map((itemInfo) =>
    titlesRelatedTo.map(
      (key) => itemInfo[key as Exclude<keyof ItemData, "createdAt" | "updatedAt">],
    ),
  )

  return (
    <tbody>
      {rows.map((row, index) => (
        <TableBodyRow
          key={data[index].id}
          row={row}
          id={data[index].id}
          moreActions={moreActions}
        />
      ))}
    </tbody>
  )
}
