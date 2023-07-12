import Data from "./data"
import ItemData from "./item-data"

export default interface DashboardTableData {
  titles: Array<{ text: string; relatedTo: keyof ItemData }>
  data: Data
}
