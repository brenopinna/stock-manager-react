import { createContext } from "react"

import useLocalStorageReturn from "../types/use-local-storage-return"

type StorageDataContextValue = useLocalStorageReturn

const StorageDataContext = createContext(new Array(2) as StorageDataContextValue)

export default StorageDataContext
