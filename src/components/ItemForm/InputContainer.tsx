import { HTMLAttributes } from "react"

type InputContainerProps = HTMLAttributes<HTMLDivElement>

export default function InputContainer({ ...props }: InputContainerProps) {
  return <div {...props} className={`grid gap-1 ${props.className ?? ""}`} />
}
