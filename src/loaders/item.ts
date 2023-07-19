import { LoaderFunction } from "react-router-dom"

import Data from "../types/data"

export const itemLoader: LoaderFunction = ({ params }) => {
  const { itemId } = params

  const localStorageContent: string = localStorage.getItem("items") ?? "[]"

  const data = JSON.parse(localStorageContent) as Data

  const item = data.find((data) => data.id === itemId)

  if (!item) {
    throw new Response(
      "Not Found: The requested ID doesn't exist at the local storage.",
      {
        status: 404,
      },
    )
  }

  return item
}
