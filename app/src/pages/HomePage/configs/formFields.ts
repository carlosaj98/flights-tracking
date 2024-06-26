import { formFieldsInterface } from "../../../interfaces/formFields.interface"

const formFields: formFieldsInterface[] = [
  {
    type: "text",
    name: "airline",
    id: "airline-input",
    label: "Airline",
    placeholder: "Your Airline",
  },

  {
    type: "text",
    name: "flight",
    id: "flight-input",
    label: "Flight Number",
    placeholder: "Your flight number",
  },

  {
    type: "select",
    name: "date",
    id: "date-input",
    label: "Flight Date",
    placeholder: "Your flight date",
    options: ["Today", "Tomorrow"],
  },
]

export default formFields
