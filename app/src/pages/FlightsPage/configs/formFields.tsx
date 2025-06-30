import { formFieldsInterface } from "../../../interfaces/formFields.interface"
import { IconAirline, IconAirport, IconList } from "../../../common/Icons"
import * as yup from "yup"

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
    type: "select",
    name: "limit",
    id: "flight-limit",
    label: "Number of flights",
    options: [
      { optionTitle: "10 Flights", optionValue: 10 },
      { optionTitle: "25 Flights", optionValue: 25 },
      { optionTitle: "50 Flights", optionValue: 50 },
    ],
    icon:<IconList />
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
]

const validationSchema = yup.object().shape({
  airportCode: yup.string().required("Can`t be empty"),
})

export { formFields, validationSchema }
