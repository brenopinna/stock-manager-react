import { FormEvent, useContext, useEffect, useState } from "react"

import { useNavigate, useParams } from "react-router-dom"

import dayjs from "dayjs"

import Input from "./Input"
import InputContainer from "./InputContainer"

import StorageDataContext from "../../contexts/StorageData"

import ItemData from "../../types/item-data"

type FormItemData = Omit<ItemData, "id" | "createdAt" | "updatedAt"> & {
  id?: string
  createdAt?: string
  updatedAt?: string
}

const defaultItemData: FormItemData = {
  name: "",
  amount: 0,
  price: 0,
  category: "",
  description: "",
}

export default function ItemForm() {
  const [storage, setStorage] = useContext(StorageDataContext)

  const navigate = useNavigate()

  const { itemId } = useParams()
  const [originalItem] = useState(() => storage.find((item) => item.id === itemId))

  const [itemData, setItemData] = useState(() => {
    if (originalItem) {
      return {
        ...defaultItemData,
        ...originalItem,
      }
    }

    return { ...defaultItemData }
  })

  useEffect(() => {
    if (itemId) {
      const newItemData = { ...storage.find((item) => item.id === itemId)! }
      setItemData(newItemData)
    }
  }, [])

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const newItemData = {
      ...itemData,
      updatedAt: itemId ? dayjs().toISOString() : undefined,
    }

    setStorage(
      (() => {
        if (itemId) {
          storage.splice(
            storage.findIndex((data) => data.id === itemId),
            1,
            newItemData as ItemData,
          )
          return storage
        }

        return [
          ...storage,
          {
            ...newItemData,
            createdAt: dayjs().toISOString(),
            id: crypto.randomUUID(),
          },
        ]
      })(),
    )

    navigate("/items", { replace: true })
    alert("Item salvo com sucesso!")
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[900px] mx-auto auto-cols-auto grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-4 gap-6">
      <InputContainer>
        <label htmlFor="name">Nome</label>
        <Input
          required
          value={itemData.name}
          onChange={(e) =>
            setItemData((data) => ({ ...data, [e.target.name]: e.target.value }))
          }
          type="text"
          name="name"
          id="name"
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor="amount">Quantidade</label>
        <Input
          value={itemData.amount}
          required
          onChange={(e) =>
            setItemData((data) => ({ ...data, [e.target.name]: +e.target.value }))
          }
          type="number"
          min={1}
          max={Number.MAX_SAFE_INTEGER}
          step={1}
          name="amount"
          id="amount"
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor="price">Preço</label>
        <Input
          value={itemData.price}
          required
          onChange={(e) =>
            setItemData((data) => ({ ...data, [e.target.name]: +e.target.value }))
          }
          type="number"
          min={0.01}
          max={Number.MAX_SAFE_INTEGER}
          step={0.01}
          name="price"
          id="price"
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor="category">Categoria</label>
        <Input
          value={itemData.category}
          required
          onChange={(e) =>
            setItemData((data) => ({ ...data, [e.target.name]: e.target.value }))
          }
          type="text"
          name="category"
          id="category"
        />
      </InputContainer>
      <InputContainer className="col-span-full">
        <label htmlFor="description">Descrição</label>
        <textarea
          value={itemData.description}
          onChange={(e) =>
            setItemData((data) => ({ ...data, [e.target.name]: e.target.value }))
          }
          required
          name="description"
          id="description"
          className="h-[200px] resize-none bg-secondary rounded-md px-4 py-2 focus:outline-none"
        />
      </InputContainer>
      <button
        type="submit"
        className="rounded-md text-black px-4 py-2 transition-all bg-cyan-500 hover:bg-cyan-600 w-fit">
        Salvar
      </button>
    </form>
  )
}
