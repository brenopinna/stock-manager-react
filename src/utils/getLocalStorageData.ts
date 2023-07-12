import Data from "../types/data"

export function getLocalStorageData() {
  const storageResponse: string = localStorage.getItem("items") ?? "[]"

  const data = JSON.parse(storageResponse) as Data

  return data
}
