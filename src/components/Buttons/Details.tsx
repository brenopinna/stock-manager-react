import { Link } from "react-router-dom"

interface DetailsProps {
  isUniqueButton?: boolean
  itemId: string
}

export default function Details({ isUniqueButton, itemId }: DetailsProps) {
  return (
    <Link to={`/items/${itemId}`}>
      <button
        className={`rounded-md text-black px-4 py-2 transition-all ${
          isUniqueButton ? "bg-white hover:bg-slate-300" : "bg-cyan-500 hover:bg-cyan-600"
        }`}>
        Ver
      </button>
    </Link>
  )
}
