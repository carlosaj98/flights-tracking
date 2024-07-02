
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

interface FormComponentProps {
  formFields: formFieldsInterface[]
}

const HeroForm: React.FC<FormComponentProps> = ({ formFields }) => {
  const { handleSubmit, control } = useForm<FieldValues>()
  const [formData, setFormData] = useState<FieldValues>({})

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setFormData(data)
  }

  useEffect(() => {
    console.log(formData)
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
              defaultValue={rest.options![0]}
              render={({ field }) => <InputSelect field={field} rest={rest} />}
            />
          </div>
        )
      })}

      <FormSubmitButton text={"SEARCH"} />
    </CustomForm>
  )
}
export default HeroForm
