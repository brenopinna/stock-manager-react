import { LoaderFunction } from "react-router-dom"

import { getLocalStorageData } from "../utils/getLocalStorageData"

export const itemLoader: LoaderFunction = ({ params }) => {
  const { itemId } = params

  const data = getLocalStorageData()

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
