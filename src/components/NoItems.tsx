import { Link } from "react-router-dom"

export default function NoItems() {
  return (
    <p className="font-thin text-xl">
      Opa, parece que você ainda não cadastrou nenhum item!{" "}
      <Link className="underline hover:text-slate-300 " to="/items/new-item">
        clique aqui
      </Link>{" "}
      para cadastrar.
    </p>
  )
}
