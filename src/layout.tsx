import { Outlet } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"

import StorageDataContext from "./contexts/StorageData"

import useLocalStorage from "./hooks/useLocalStorage"

import { getLocalStorageData } from "./utils/getLocalStorageData"

const localStorageInitialData = getLocalStorageData()

export default function RootLayout() {
  const storageDataState = useLocalStorage(localStorageInitialData)

  return (
    <div className="min-h-screen text-white bg-primary flex flex-col">
      <Header />
      <main className="px-8 pb-4 grid gap-8 content-start overflow-auto flex-grow">
        <StorageDataContext.Provider value={storageDataState}>
          <Outlet />
        </StorageDataContext.Provider>
      </main>
      <Footer />
    </div>
  )
}
