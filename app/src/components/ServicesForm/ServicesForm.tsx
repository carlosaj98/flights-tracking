import ServicesFormContainer from "./ServicesForm.style"
import { useForm, Controller, FieldValues } from "react-hook-form"
import { formFieldsInterface } from "../../interfaces/formFields.interface"
import { InputRadio, InputSelect, InputText } from "../../common/InputsTemplate"
import { Stack } from "@mui/material"

interface FormComponentProps {
  formFields: formFieldsInterface[]
}

const ServicesForm: React.FC<FormComponentProps> = ({ formFields }) => {
  const { control } = useForm<FieldValues>()
  return (
    <ServicesFormContainer>
      {formFields.map(({ name, id, label, type, ...rest }) => {
        return (
          <Stack key={id}>
            {type === "radio" && (
              <div key={id} className="input-container">
                <label htmlFor={id}>{label}</label>
                <Controller
                  key={name}
                  name={name}
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <InputRadio field={field} rest={rest} />
                  )}
                />
              </div>
            )}

            {type === "text" && (
              <div key={id} className="input-container">
                <label htmlFor={id}>{label}</label>
                <Controller
                  key={name}
                  name={name}
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <InputText field={field} rest={rest} />
                  )}
                />
              </div>
            )}

            {type === "select" && (
              <div key={id} className="input-container">
                <label htmlFor={id}>{label}</label>
                <Controller
                  key={name}
                  name={name}
                  control={control}
                  defaultValue={rest.options![1].dateValue}
                  render={({ field }) => (
                    <InputSelect field={field} rest={rest} />
                  )}
                />
              </div>
            )}
          </Stack>
        )
      })}
    </ServicesFormContainer>
  )
}
export default ServicesForm
