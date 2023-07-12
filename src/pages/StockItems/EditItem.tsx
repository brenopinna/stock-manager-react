import { useLoaderData } from "react-router-dom"

import ItemForm from "../../components/ItemForm"

import ItemData from "../../types/item-data"

export default function EditItem() {
  const { name } = useLoaderData() as ItemData
  return (
    <>
      <p className="font-thin text-2xl">Atualizar Item - {name}</p>
      <ItemForm action="update" />
    </>
  )
}
