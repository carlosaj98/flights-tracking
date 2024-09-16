import { formFieldsInterface } from "../../../interfaces/formFields.interface"
import formatDate from "../../../utils/formatDate"
import { IconCalendar, IconAirline } from "../../../common/Icons"

const formFields: formFieldsInterface[] = [
  {
    type: "radio",
    label: "Flight direction",
    id: "flight-direction",
    name: "flight-direction",
    options: [
      { directionTitle: "Arrival", directionValue: "arrival" },
      { directionTitle: "Departure", directionValue: "departure" },
    ],
  },

  {
    type: "text",
    name: "airline",
    id: "airline-input",
    label: "Airline (optional)",
    placeholder: "Write any airline",
    icon: <IconAirline />,
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
