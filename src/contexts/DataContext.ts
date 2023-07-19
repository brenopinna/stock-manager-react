import { createContext } from "react"

import useDataReturn from "../types/use-data-return"

type DataContextValue = useDataReturn

const DataContext = createContext(new Array(2) as DataContextValue)

export default DataContext
