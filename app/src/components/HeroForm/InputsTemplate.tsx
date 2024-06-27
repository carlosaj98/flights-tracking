import { TextField, Select, MenuItem } from "@mui/material"
import { FieldValues } from "react-hook-form"

interface InputProps {
  field: FieldValues
  rest: FieldValues
}

const InputText: React.FC<InputProps> = ({ field, rest }) => {
  return <TextField {...field} {...rest} />
}

const InputSelect: React.FC<InputProps> = ({ field, rest }) => {
  return (
    <Select {...field} {...rest}>
      {rest.options?.map((option: string) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </Select>
  )
}

export { InputText, InputSelect }
