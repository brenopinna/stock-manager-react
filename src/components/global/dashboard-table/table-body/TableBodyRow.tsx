import { shortDataContent } from "../../../../utils/shortDataContent"
import Delete from "../../buttons/Delete"
import Details from "../../buttons/Details"
import Update from "../../buttons/Update"

interface TableBodyRowProps {
  row: Array<string | number>
  moreActions?: boolean
  id: string
}

export default function TableBodyRow({ row, moreActions, id }: TableBodyRowProps) {
  return (
    <tr>
      {row.map((data) => {
        const isBig = data.toString().length > 20
        const shortData = shortDataContent(data)
        return (
          <td key={id} className="text-left p-5 font-normal">
            <span title={isBig ? data.toString() : ""}>{shortData}</span>
          </td>
        )
      })}
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
