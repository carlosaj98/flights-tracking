import { ReactElement } from "react"

export interface optionsInputInterface {
  dateTitle?: string
  dateValue?: string
  directionTitle?: string
  directionValue?: string
}

export interface formFieldsInterface {
  type: "text" | "select" | "radio"
  name: string
  id: string
  label: string
  placeholder?: string
  options?: optionsInputInterface[]
  icon?: ReactElement
}
