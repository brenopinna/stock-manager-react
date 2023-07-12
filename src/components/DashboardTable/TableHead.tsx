import { useContext } from "react"

import { DashboardTableDataContext } from "../../contexts/DashboardTableData"

export default function TableHead() {
  const { titles } = useContext(DashboardTableDataContext)

  if (!titles.length) {
    throw new Error("TableHead must have a not empty Array param 'titles'.")
  }

  return (
    <thead className="bg-secondary shadow-md shadow-black/30 rounded-md">
      <tr className="p-12">
        {titles.map((title, index) => (
          <th key={`${title.text}${index}`} scope="col" className="text-left p-5">
            {title.text}
          </th>
        ))}
        <th scope="col" className="text-left p-5">
          Ações
        </th>
      </tr>
    </thead>
  )
}
