import { TextField, Select, MenuItem, Stack, Button, FormControl } from "@mui/material"
import { useState } from "react"

import formFields from "./formFields"

import { FieldValues, SubmitHandler, useForm } from "react-hook-form"

const HeroForm: React.FC = () => {
  const { register, handleSubmit } = useForm<FieldValues>()
  const [formData, setFormData] = useState<FieldValues>([])

  const onSubmit: SubmitHandler<FieldValues> = (data) => setFormData(data)
  console.log(formData)

  return (
    <Stack
      component="form"
      marginTop={"64px"}
      gap={"12px"}
      onSubmit={handleSubmit(onSubmit)}
    >
      {formFields.map((field) => {
        return field.type === "text" ? (
          <div key={field.id}>
            <label htmlFor={field.id}>{field.label}</label>
            <TextField
              id={field.id}
              placeholder={field.placeholder}
              {...register(field.name)}
            />
          </div>
        ) : (
          <FormControl key={field.id}>
            <label htmlFor={field.id}>{field.label}</label>
            <Select id={field.id} defaultValue={field.options[0]} {...register(field.name)}>
              {field.options?.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )
      })}

      <Button type="submit">Submit</Button>
    </Stack>
  )
}
export default HeroForm
