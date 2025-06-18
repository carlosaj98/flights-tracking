import {
  TextField,
  Select,
  MenuItem,
  Stack,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material"
import { FieldValues } from "react-hook-form"
import { optionsInputInterface } from "../interfaces/formFields.interface"

interface InputProps {
  field: FieldValues
  rest: FieldValues
  error?: boolean
  helperText?: string
}

const InputText: React.FC<InputProps> = ({
  field,
  rest,
  error,
  helperText,
}) => {
  return (
    <TextField
      {...field}
      {...rest}
      autoComplete="off"
      error={error}
      helperText={helperText}
      FormHelperTextProps={{ className: "custom-error-text" }}
      InputProps={{
        startAdornment: <Stack marginRight={"18px"}>{rest.icon}</Stack>,
        sx: {
          borderRadius: "6px",
          backgroundColor: "white",
          fontFamily: "var(--font-base)",
        },
      }}
      sx={{
        ".MuiOutlinedInput-root": {
          "& fieldset": {
            transition: "all 0.2s ease-out",
            border: "1px solid var(--neutral-300)",
          },
          "&:hover fieldset": {
            border: "1px solid var(--neutral-400)",
          },
          "&.Mui-focused fieldset": {
            boxShadow: "0 2px 4px var(--neutral-400) inset",
            border: "1px solid var(--neutral-400)",
          },
        },
      }}
    />
  )
}

const InputSelect: React.FC<InputProps> = ({ field, rest }) => {
  return (
    <Select
      {...field}
      {...rest}
      startAdornment={<Stack marginRight={"18px"}>{rest.icon}</Stack>}
      sx={{
        borderRadius: "6px",
        backgroundColor: "white",
        fontFamily: "var(--font-base)",

        "&.MuiOutlinedInput-root": {
          "& fieldset": {
            transition: "all 0.2s ease-out",
            border: "1px solid var(--neutral-300)",
          },
          "&:hover fieldset": {
            border: "1px solid var(--neutral-400)",
          },
          "&.Mui-focused fieldset": {
            boxShadow: "0 2px 4px var(--neutral-400) inset",
            border: "1px solid var(--neutral-400)",
          },
        },
      }}
      MenuProps={{
        MenuListProps: {
          disablePadding: true,
          sx: {
            padding: "12px",
            display: "flex",
            flexDirection: "column",
            gap: "6px",
          },
        },
        sx: {
          "& .MuiMenu-paper": {
            marginTop: "12px",
            borderRadius: "6px",
            backgroundColor: "var(--blue-100)",
            backdropFilter: "blur(5px)",
            boxShadow: "0 2px 4px var(--neutral-400)",
            padding: "6px",
          },
        },
      }}
    >
      {rest.options?.map((option: optionsInputInterface) => (
        <MenuItem
          key={option.optionTitle}
          value={option.optionValue}
          selected={false}
          divider
          sx={{
            padding: "12px 24px",
            color: "var(--neutral-800)",
            transition: "all 0.2s ease-out",
            backgroundColor: "var(--neutral-50)",
            boxShadow: "0 1px 2px var(--neutral-300)",
            borderRadius: "6px",
            "&:hover, &.MuiMenuItem-root.Mui-selected:hover": {
              color: "white",
              backgroundColor: "var(--neutral-600)",

              boxShadow: "0 1px 2px var(--neutral-800)",
            },
            fontFamily: "var(--font-base)",

            "&.MuiMenuItem-root.Mui-selected": {
              color: "var(--blue-600)",
              backgroundColor: "var(--neutral-50)",
            },
          }}
        >
          {option.optionTitle}
        </MenuItem>
      ))}
    </Select>
  )
}

const InputRadio: React.FC<InputProps> = ({ field, rest }) => {
  return (
    <FormControl
      {...field}
      {...rest}
      sx={{
        span: { fontFamily: "var(--font-base)" },
      }}
    >
      <FormLabel id="demo-controlled-radio-buttons-group">
        {rest.label}
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        defaultValue={rest.options[0].optionValue}
      >
        {rest.options?.map((option: optionsInputInterface) => (
          <FormControlLabel
            key={option.optionValue}
            value={option.optionValue}
            control={<Radio />}
            label={option.optionTitle}
          />
        ))}
      </RadioGroup>
    </FormControl>
  )
}

export { InputText, InputSelect, InputRadio }
