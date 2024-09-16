import { formFieldsInterface } from "../../../interfaces/formFields.interface"
import { IconAirline, IconCalendar, IconFlightNum } from "../../../common/Icons"
import formatDate from "../../../utils/formatDate"

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
        dateValue: formatDate(-1),
      },
      {
        dateTitle: "Today",
        dateValue: formatDate(0),
      },
      {
        dateTitle: "Tomorrow",
        dateValue: formatDate(1),
      },
    ],
    icon: <IconCalendar />,
  },
]

export default formFields
