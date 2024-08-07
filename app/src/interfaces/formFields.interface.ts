import { ReactElement } from "react"

export interface formFieldsInterface {
  type: "text" | "select"
  name: string
  id: string
  label: string
  placeholder: string
  options?: string[],
  icon:ReactElement
}
