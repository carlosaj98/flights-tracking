import { formFieldsInterface } from "../../../interfaces/formFields.interface"
import { IconAirline, IconCalendar, IconFlightNum } from "../../../common/Icons"

const today = new Date()

const yesterday = new Date(today)
yesterday.setDate(today.getDate() - 1)

const tomorrow = new Date(today)
tomorrow.setDate(today.getDate() + 1)

function formatDate(date: Date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")
  return `${year}-${month}-${day}`
}

const formFields: formFieldsInterface[] = [
  {
    type: "text",
    name: "airline",
    id: "airline-input",
    label: "Airline",
    placeholder: "Your Airline",
    icon: <IconAirline />,
  },

  {
    type: "text",
    name: "flight",
    id: "flight-input",
    label: "Flight Number",
    placeholder: "Your flight number",
    icon: <IconFlightNum />,
  },

  {
    type: "select",
    name: "date",
    id: "date-input",
    label: "Flight Date",
    placeholder: "Your flight date",
    options: [
      {
        dateTitle: "Yesterday",
        dateValue: formatDate(yesterday),
      },
      {
        dateTitle: "Today",
        dateValue: formatDate(today),
      },
      {
        dateTitle: "Tomorrow",
        dateValue: formatDate(tomorrow),
      },
    ],
    icon: <IconCalendar />,
  },
]

export default formFields
