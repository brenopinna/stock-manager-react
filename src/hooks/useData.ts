import { useState } from "react"

import Data from "../types/data"
import useDataReturn from "../types/use-data-return"

export default function useData(): useDataReturn {
  const initialData = JSON.parse(localStorage.getItem("items") ?? "[]") as Data
  const [data, setData] = useState(initialData)

  function setLocalStorage(newData: Data) {
    setData(newData)
    localStorage.setItem("items", JSON.stringify(newData))
  }

  return [data, setLocalStorage]
}
