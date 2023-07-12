import { createBrowserRouter } from "react-router-dom"

import RootLayout from "./layout"

import GeneralErrorBoundary from "./error-boundaries/GeneralErrorBoundary"

import Home from "./pages/Home"
import StockItemsLayout from "./pages/StockItems/layout"
import Items from "./pages/StockItems"
import Item from "./pages/StockItems/Item"
import NewItem from "./pages/StockItems/NewItem"
import EditItem from "./pages/StockItems/EditItem"

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
        element: <StockItemsLayout />,
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
            path: "new-item",
            element: <NewItem />,
          },
          {
            path: "edit/:itemId",
            element: <EditItem />,
            loader: itemLoader,
          },
        ],
      },
    ],
  },
])

export default router
