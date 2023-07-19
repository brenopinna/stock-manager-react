import { Link, Outlet, useLocation } from "react-router-dom"

export default function ItemsLayout() {
  const location = useLocation()
  const actualRoute = location.pathname
    .split("/")
    .filter((value) => value !== "/")
    .at(-1)

  return (
    <>
      <h1 className="text-5xl font-thin">Stock Items</h1>
      <nav className="border-b-2 border-b-gray-500 flex">
        <Link
          className={`px-4 py-2 relative before:absolute before:bottom-[-2px] before:left-0 before:w-full before:h-[3px] hover:opacity-80 ${
            actualRoute === "items" ? "before:bg-gray-400" : ""
          }`}
          to="/items">
          Todos os itens
        </Link>
        <Link
          className={`px-4 py-2 relative before:absolute before:bottom-[-2px] before:left-0 before:w-full before:h-[3px] hover:opacity-80 ${
            actualRoute === "new-item" ? "before:bg-gray-400" : ""
          }`}
          to="new-item">
          Novo item
        </Link>
      </nav>
      <Outlet />
    </>
  )
}
