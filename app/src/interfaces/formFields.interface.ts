import { ReactElement } from "react"

export interface optionsInputInterface {
  optionTitle: string | number
  optionValue: string | number
}

export interface formFieldsInterface {
  type: "text" | "select" | "radio"
  name: string
  id: string
  label: string
  placeholder?: string
  options?: optionsInputInterface[]
  icon?: ReactElement,
  required?: boolean
}
