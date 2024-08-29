import { useEffect, useState } from "react"

import {
  FieldValues,
  SubmitHandler,
  useForm,
  Controller,
} from "react-hook-form"

import { formFieldsInterface } from "../../interfaces/formFields.interface"
import { InputText, InputSelect } from "./InputsTemplate"
import CustomForm from "./HeroForm.style"
import FormSubmitButton from "../../common/Buttons"
import httpService from "../../services/httpService"

interface FormComponentProps {
  formFields: formFieldsInterface[]
}

const HeroForm: React.FC<FormComponentProps> = ({ formFields }) => {
  const { handleSubmit, control } = useForm<FieldValues>()
  const [formData, setFormData] = useState<FieldValues>({})
  const [isLoading, setIsLoading] = useState(false)
  const [flight, setFlight] = useState({})

  const API_KEY = import.meta.env.VITE_API_KEY

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setFormData(data)
    setIsLoading(true)
  }

  useEffect(() => {
    if (isLoading) {
      console.log(formData)

      httpService("/flights")
        .getFlightsOne({
          access_key: API_KEY,
          airline_name: formData.airline,
          flight_iata: formData.flight,
        })
        .then(({ data }) => {
          const transformData = data.data.filter(
            ({ flight_date }: { flight_date: string }) =>
              flight_date === formData.date
          )
          setFlight(transformData[0])
          console.log(transformData[0])
        })
    }
  }, [formData])

  return (
    <CustomForm onSubmit={handleSubmit(onSubmit)}>
      {formFields.map(({ name, id, label, type, ...rest }) => {
        return type === "text" ? (
          <div key={id} className="input-container">
            <label htmlFor={id}>{label}</label>
            <Controller
              key={name}
              name={name}
              control={control}
              defaultValue=""
              render={({ field }) => <InputText field={field} rest={rest} />}
            />
          </div>
        ) : (
          <div key={id} className="input-container">
            <label htmlFor={id}>{label}</label>
            <Controller
              key={name}
              name={name}
              control={control}
              defaultValue={rest.options![1].dateValue}
              render={({ field }) => <InputSelect field={field} rest={rest} />}
            />
          </div>
        )
      })}

      <FormSubmitButton text={"SEARCH FLIGHT"} />
    </CustomForm>
  )
}
export default HeroForm
