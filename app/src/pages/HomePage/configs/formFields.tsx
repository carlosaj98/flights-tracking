import { formFieldsInterface } from "../../../interfaces/formFields.interface"
import { IconAirline, IconCalendar, IconFlightNum } from "../../../common/Icons"

const formFields: formFieldsInterface[] = [
  {
    type: "text",
    name: "airline",
    id: "airline-input",
    label: "Airline",
    placeholder: "Your Airline",
    icon: <IconAirline/>,
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
    options: ["Today", "Tomorrow"],
    icon: <IconCalendar />,
  },
]

export default formFields
