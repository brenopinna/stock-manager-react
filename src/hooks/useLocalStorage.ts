import { useState } from "react"

import Data from "../types/data"
import useLocalStorageReturn from "../types/use-local-storage-return"

export default function useLocalStorage(initialData: Data): useLocalStorageReturn {
  const [data, setData] = useState(initialData)

  function setLocalStorage(newData: Data) {
    setData(newData)
    localStorage.setItem("items", JSON.stringify(newData))
  }

  return [data, setLocalStorage]
}
