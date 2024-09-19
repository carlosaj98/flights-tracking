import ServicesFormContainer from "./ServicesForm.style"
import {
  useForm,
  Controller,
  FieldValues,
  SubmitHandler,
} from "react-hook-form"
import { formFieldsInterface } from "../../interfaces/formFields.interface"
import { InputRadio, InputSelect, InputText } from "../../common/InputsTemplate"
import { FormSubmitButton } from "../../common/Buttons"
import { Stack } from "@mui/material"

interface FormComponentProps {
  formFields: formFieldsInterface[]
  actionForm: React.Dispatch<React.SetStateAction<FieldValues>>
  actionLoading: React.Dispatch<React.SetStateAction<boolean>>
  actionDirection: React.Dispatch<React.SetStateAction<"arrival" | "departure">>
}

const ServicesForm: React.FC<FormComponentProps> = ({
  formFields,
  actionForm,
  actionLoading,
  actionDirection,
}) => {
  const { handleSubmit, control } = useForm<FieldValues>()

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    actionForm(data)
    actionLoading(true)
    if (data.direction === "arr_iata") {
      actionDirection("departure")
    } else {
      actionDirection("arrival")
    }
    console.log(data)
  }
  return (
    <ServicesFormContainer
      onSubmit={handleSubmit(onSubmit)}
      sx={{ maxWidth: { lg: "40%", xs: "100%" } }}
    >
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
                  defaultValue={rest.options![0].directionValue}
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
      <FormSubmitButton text="SEARCH FLIGHTS" />
    </ServicesFormContainer>
  )
}
export default ServicesForm
