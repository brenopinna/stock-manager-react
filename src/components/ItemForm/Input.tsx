import { InputHTMLAttributes } from "react"

export default function Input({ ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input {...props} className="bg-secondary rounded-md px-4 py-2 focus:outline-none" />
  )
}
