import Delete from "../../Buttons/Delete"
import Details from "../../Buttons/Details"
import Update from "../../Buttons/Update"

interface TableBodyRowProps {
  row: Array<string | number>
  moreActions?: boolean
  id: string
}

export default function TableBodyRow({ row, moreActions, id }: TableBodyRowProps) {
  return (
    <tr>
      {row.map((data) => (
        <td key={id} className="text-left p-5 font-normal">
          {data}
        </td>
      ))}
      <td className="p-5">
        {moreActions ? (
          <div className="flex gap-4">
            <Details itemId={id} />
            <Update itemId={id} />
            <Delete itemId={id} />
          </div>
        ) : (
          <Details itemId={id} isUniqueButton />
        )}
      </td>
    </tr>
  )
}
