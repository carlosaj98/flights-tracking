import { TextField, Select, MenuItem, Button } from "@mui/material"
import { useEffect, useState } from "react"

import { FieldValues, SubmitHandler, useForm } from "react-hook-form"

import { formFieldsInterface } from "../../interfaces/formFields.interface"

import CustomForm from "./HeroForm.style"

interface FormComponentProps {
  formFields: formFieldsInterface[]
}

const HeroForm: React.FC<FormComponentProps> = ({ formFields }) => {
  const { register, handleSubmit } = useForm<FieldValues>()
  const [formData, setFormData] = useState<FieldValues>({})

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setFormData(data)
  }

  useEffect(() => {
    console.log(formData)
  }, [formData])

  return (
    <CustomForm
      onSubmit={handleSubmit(onSubmit)}
    >
      {formFields.map((field) => {
        return field.type === "text" ? (
          <div key={field.id} className="input-container">
            <label htmlFor={field.id}>{field.label}</label>
            <TextField
              id={field.id}
              placeholder={field.placeholder}
              {...register(field.name)}
            />
            
          </div>
        ) : (
          <div key={field.id} className="input-container">
            <label htmlFor={field.id}>{field.label}</label>
            <Select
              id={field.id}
              defaultValue={field.options![0]}
              {...register(field.name)}
            >
              {field.options?.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </div>
        )
      })}

      <Button type="submit">Submit</Button>
    </CustomForm>
  )
}
export default HeroForm
