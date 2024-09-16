import { ReactElement } from "react"

export interface optionsSelectInterface {
  dateTitle: string,
  dateValue: string
}

export interface formFieldsInterface {
  type: "text" | "select" | "radio"
  name: string
  id: string
  label: string
  placeholder?: string
  options?: optionsSelectInterface[],
  icon?:ReactElement
}
