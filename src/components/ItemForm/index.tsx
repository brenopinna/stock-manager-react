import { FormEvent, useContext, useState } from "react"

import { useLoaderData, useNavigate } from "react-router-dom"

import dayjs from "dayjs"

import Input from "./Input"
import InputContainer from "./InputContainer"

import ItemData from "../../types/item-data"

import StorageDataContext from "../../contexts/StorageData"

interface ItemFormProps {
  action: "create" | "update"
}

export default function ItemForm({ action }: ItemFormProps) {
  const originalItemInfo = useLoaderData() as ItemData
  const [storage, setStorage] = useContext(StorageDataContext)
  const navigate = useNavigate()

  const [name, setName] = useState(() => getInitialStateValue<string>("name"))
  const [amount, setAmount] = useState(() => getInitialStateValue<number>("amount"))
  const [price, setPrice] = useState(() => getInitialStateValue<number>("price"))
  const [category, setCategory] = useState(() => getInitialStateValue<string>("category"))
  const [description, setDescription] = useState(() =>
    getInitialStateValue<string>("description"),
  )

  function getInitialStateValue<T>(stateName: keyof ItemData) {
    if (action === "update") {
      return originalItemInfo[stateName] as T
    }

    return ""
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    setName("")
    setAmount("")
    setPrice("")
    setCategory("")
    setDescription("")

    const itemData: ItemData = {
      name,
      amount: +amount,
      price: +price,
      category,
      description,
      id: action === "create" ? crypto.randomUUID() : originalItemInfo.id,
      createdAt: action === "create" ? dayjs().toString() : originalItemInfo.createdAt,
    }

    if (action === "update") {
      itemData.updatedAt = dayjs().toString()
    }

    if (action === "create") {
      setStorage(storage.concat(itemData))
    } else if (action === "update") {
      const oldItem = storage.find((data) => data.id === originalItemInfo.id) as ItemData
      const newStorage = storage.map((data) => (data === oldItem ? itemData : data))

      setStorage(newStorage)
    }

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
          required={action === "create"}
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          id="name"
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor="amount">Quantidade</label>
        <Input
          required={action === "create"}
          value={amount}
          onChange={(e) => setAmount(+e.target.value)}
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
          required={action === "create"}
          value={price}
          onChange={(e) => setPrice(+e.target.value)}
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
          required={action === "create"}
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          type="text"
          name="category"
          id="category"
        />
      </InputContainer>
      <InputContainer className="col-span-full">
        <label htmlFor="description">Descrição</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required={action === "create"}
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
