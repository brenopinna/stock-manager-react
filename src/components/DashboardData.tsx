interface DashboardDataProps {
  title: string
  data: number
}

export default function DashboardData({ title, data }: DashboardDataProps) {
  return (
    <div className="bg-secondary shadow-md shadow-black/30 rounded-md px-8 py-4 h-[180px] grid grid-rows-[min-content_auto]">
      <p className="text-xl">{title}</p>
      <p className="text-center text-5xl font-medium self-center">{data}</p>
    </div>
  )
}
