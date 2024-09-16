import { formFieldsInterface } from "../../../interfaces/formFields.interface"
import formatDate from "../../../utils/formatDate"
import { IconCalendar, IconAirline, IconAirport } from "../../../common/Icons"

const formFields: formFieldsInterface[] = [
  {
    type: "radio",
    name: "direction",
    id: "flight-direction",
    label: "Flight direction",
    options: [
      { directionTitle: "Arrival", directionValue: "arr_iata" },
      { directionTitle: "Departure", directionValue: "dep_iata" },
    ],
  },

  {
    type: "text",
    name: "airportCode",
    id: "airport-code",
    label: "Airport code",
    placeholder: "Write the airport code",
    icon: <IconAirport />,
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
    label: "Flights Date",
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
