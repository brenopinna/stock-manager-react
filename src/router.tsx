import { createBrowserRouter } from "react-router-dom"

import RootLayout from "./layout"

import GeneralErrorBoundary from "./error-boundaries/GeneralErrorBoundary"

import Home from "./pages/Home"
import ItemsLayout from "./components/items/layout"
import Items from "./pages/items"
import Item from "./pages/items/Details"
import New from "./pages/items/New"
import Edit from "./pages/items/Edit"

import { itemLoader } from "./loaders/item"

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <GeneralErrorBoundary />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "items",
        element: <ItemsLayout />,
        children: [
          {
            index: true,
            element: <Items />,
          },
          {
            path: ":itemId",
            element: <Item />,
            loader: itemLoader,
          },
          {
            path: ":itemId/edit",
            element: <Edit />,
            loader: itemLoader,
          },
          {
            path: "new-item",
            element: <New />,
          },
        ],
      },
    ],
  },
])

export default router
