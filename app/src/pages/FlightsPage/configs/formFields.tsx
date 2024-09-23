import { formFieldsInterface } from "../../../interfaces/formFields.interface"
import {  IconAirline, IconAirport } from "../../../common/Icons"

const formFields: formFieldsInterface[] = [
  {
    type: "radio",
    name: "direction",
    id: "flight-direction",
    label: "Flight direction",
    options: [
      { optionTitle: "Arrival", optionValue: "arr_iata" },
      { optionTitle: "Departure", optionValue: "dep_iata" },
    ],
  },
  {
    type: "radio",
    name: "limit",
    id: "flight-limit",
    label: "Number of flights",
    options: [
      { optionTitle: "10 Flights", optionValue: 10 },
      { optionTitle: "25 Flights", optionValue: 25 },
      { optionTitle: "50 Flights", optionValue: 50 },
    ],
  },

  {
    type: "text",
    name: "airportCode",
    id: "airport-code",
    label: "Airport code",
    placeholder: "Write the airport code",
    icon: <IconAirport />,
    required: true,
  },

  {
    type: "text",
    name: "airline",
    id: "airline-input",
    label: "Airline (optional)",
    placeholder: "Write any airline",
    icon: <IconAirline />,
  },
]

export default formFields
