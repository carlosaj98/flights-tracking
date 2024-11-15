import { IconCountry } from "../../../common/Icons"
import { formFieldsInterface } from "../../../interfaces/formFields.interface"
import { countries } from "../../../utils/countriesData.json"

const countriesSort = countries.sort((a, b) => a.name.localeCompare(b.name))
console.log(countriesSort)

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
]

export { formFields }
