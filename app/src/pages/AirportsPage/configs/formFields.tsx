import { IconCountry, IconAirport } from "../../../common/Icons"
import { formFieldsInterface } from "../../../interfaces/formFields.interface"
import { countries } from "../../../utils/countriesData.json"
import * as yup from "yup"

const countriesSort = countries.sort((a, b) => a.name.localeCompare(b.name))

const formFields: formFieldsInterface[] = [
  {
    type: "select",
    name: "countries",
    id: "countries-input",
    label: "Countries",
    placeholder: "Select a country",
    options: countriesSort.map((country) => ({
      optionTitle: country.name,
      optionValue: country.code,
    })),
    icon: <IconCountry />,
  },

  {
    type: "text",
    name: "airportCode",
    id: "airport-code",
    label: "Airport code (Optional)",
    placeholder: "Write the airport code",
    icon: <IconAirport />,
  },
]

const validationSchema = yup.object().shape({
  countries: yup.string().required(),
  airportCode: yup.string()
})

export { formFields, validationSchema }
