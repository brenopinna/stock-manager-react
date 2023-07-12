import { useLoaderData } from "react-router-dom"

import dayjs from "dayjs"

import ItemData from "../../types/item-data"

import Delete from "../../components/Buttons/Delete"
import Update from "../../components/Buttons/Update"

export default function Item() {
  const { amount, category, id, name, description, price, createdAt, updatedAt } =
    useLoaderData() as ItemData

  console.log(updatedAt)

  return (
    <div className="grid gap-6">
      <div className="flex gap-3">
        <p className="font-thin text-2xl w-fit mr-6">{name}</p>
        <Update itemId={id} />
        <Delete itemId={id} />
      </div>
      <div className="flex gap-6">
        <p className="bg-secondary shadow-md shadow-black/30 rounded-md w-fit px-4 py-2">
          Categoria: {category}
        </p>
        <p className="bg-secondary shadow-md shadow-black/30 rounded-md w-fit px-4 py-2">
          Quantidade em estoque: {amount}
        </p>
        <p className="bg-secondary shadow-md shadow-black/30 rounded-md w-fit px-4 py-2">
          Preço: R$ {price}
        </p>
      </div>
      <p>{description}</p>
      <p className="flex gap-5">
        <span>Cadastrado em: {dayjs(createdAt).format("DD/MM/YYYY, [às] HH:mm")}</span>
        {updatedAt && (
          <span>Atualizado em: {dayjs(updatedAt).format("DD/MM/YYYY, [às] HH:mm")}</span>
        )}
      </p>
    </div>
  )
}