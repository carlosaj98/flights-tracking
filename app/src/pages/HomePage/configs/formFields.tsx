import { formFieldsInterface } from "../../../interfaces/formFields.interface"
import { IconAirline, IconCalendar, IconFlightNum } from "../../../common/Icons"
import formatDate from "../../../utils/formatDate"
import * as yup from "yup"

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
        optionTitle: "Yesterday",
        optionValue: formatDate(-1),
      },
      {
        optionTitle: "Today",
        optionValue: formatDate(0),
      },
      {
        optionTitle: "Tomorrow",
        optionValue: formatDate(1),
      },
    ],
    icon: <IconCalendar />,
  },
]

const validationSchema = yup.object().shape({
  airline: yup.string().required("Can`t be empty"),
  flight: yup.string().required("Can`t be empty"),
})

export {formFields, validationSchema}
