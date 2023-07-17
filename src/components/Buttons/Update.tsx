import { Link } from "react-router-dom"

type UpdateProps = { itemId: string }

export default function Update({ itemId }: UpdateProps) {
  return (
    <Link to={`/items/${itemId}/edit`}>
      <button className="bg-white rounded-md text-black px-4 py-2 hover:bg-slate-300 transition-all">
        Atualizar
      </button>
    </Link>
  )
}
