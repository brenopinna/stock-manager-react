import { Link } from "react-router-dom"

export default function GeneralErrorBoundary() {
  return (
    <div className="min-h-screen text-white bg-primary pt-32 text-center">
      <p className="text-4xl font-thin">Oops, ocorreu um erro! </p>
      <p className="mt-6">
        Volte para a{" "}
        <Link className="underline hover:text-slate-300" to=".." relative="path">
          página anterior
        </Link>{" "}
        ou para a{" "}
        <Link className="underline hover:text-slate-300" to="/">
          página inicial
        </Link>
      </p>
    </div>
  )
}
