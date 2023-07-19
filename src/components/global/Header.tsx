import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header className="py-6 px-8 flex justify-between">
      <p className="font-bold">REACT STOCK</p>
      <nav className="flex gap-6">
        <Link to="/" className="hover:opacity-70 transition-all">
          Início
        </Link>
        <Link to="/items" className="hover:opacity-70 transition-all">
          Itens
        </Link>
      </nav>
    </header>
  )
}
