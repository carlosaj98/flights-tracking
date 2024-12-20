import {
  FieldValues,
  SubmitHandler,
  useForm,
  Controller,
} from "react-hook-form"

import { formFieldsInterface } from "../../interfaces/formFields.interface"
import { InputText, InputSelect } from "../../common/InputsTemplate"
import CustomForm from "./HeroForm.style"
import { FormSubmitButton } from "../../common/Buttons"
import { ObjectSchema } from "yup"
import { yupResolver } from "@hookform/resolvers/yup"

interface FormComponentProps {
  formFields: formFieldsInterface[]
  actionForm: React.Dispatch<React.SetStateAction<FieldValues>>
  actionLoading: React.Dispatch<React.SetStateAction<boolean>>
  validation: ObjectSchema<FieldValues>
}

const HeroForm: React.FC<FormComponentProps> = ({
  formFields,
  actionForm,
  actionLoading,
  validation,
}) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FieldValues>({ resolver: yupResolver(validation) })
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    actionForm(data)
    actionLoading(true)
  }

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
              render={({ field }) => (
                <InputText
                  field={field}
                  rest={rest}
                  error={!!errors[name]}
                  helperText={errors[name]?.message as string}
                />
              )}
            />
          </div>
        ) : (
          <div key={id} className="input-container">
            <label htmlFor={id}>{label}</label>
            <Controller
              key={name}
              name={name}
              control={control}
              defaultValue={rest.options![1].optionValue}
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
