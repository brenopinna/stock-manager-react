import { useContext } from "react"

import { useNavigate, useParams } from "react-router-dom"

import DataContext from "../../../contexts/DataContext"

import ItemData from "../../../types/item-data"

type DeleteProps = { itemId: string }

export default function Delete({ itemId }: DeleteProps) {
  const [storage, setStorage] = useContext(DataContext)
  const params = useParams()
  const navigate = useNavigate()

  function handleDelete() {
    const itemToDelete = storage.find((item) => item.id === itemId) as ItemData

    const newData = storage.filter((item) => item !== itemToDelete)

    const option = confirm(`Você tem certeza que deseja excluir ${itemToDelete.name}?`)

    if (option) {
      setStorage(newData)

      if (params.itemId) {
        navigate("/items", { replace: true })
      }
    }
  }

  return (
    <button
      onClick={handleDelete}
      className="bg-red-600 rounded-md text-black px-4 py-2 hover:bg-red-700 transition-all">
      Excluir
    </button>
  )
}
