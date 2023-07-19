import { Outlet } from "react-router-dom"

import Header from "./components/global/Header"
import Footer from "./components/global/Footer"

import DataContext from "./contexts/DataContext"

import useData from "./hooks/useData"

export default function RootLayout() {
  const DataState = useData()

  return (
    <div className="min-h-screen text-white bg-primary flex flex-col">
      <Header />
      <main className="px-8 pb-4 grid gap-8 content-start overflow-auto flex-grow">
        <DataContext.Provider value={DataState}>
          <Outlet />
        </DataContext.Provider>
      </main>
      <Footer />
    </div>
  )
}
