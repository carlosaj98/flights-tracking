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
        startAdornment: (
          <Stack marginRight={"18px"}>
            {rest.icon}
          </Stack>
        ),
        sx: {
          borderRadius: "18px",
          backgroundColor: "white",
          fontFamily: "var(--font-base)",
          boxShadow: "0 2px 4px var(--gray-semilight) inset",
        },
      }}
      sx={{
        ".MuiOutlinedInput-root": {
          "& fieldset": {
            transition: "all 0.2s ease-out",
            border: "1px solid var(--gray-semilight)",
          },
          "&:hover fieldset": {
            border: "1px solid var(--gray-base)",
            boxShadow: "0 2px 4px var(--gray-base) inset",
          },
          "&.Mui-focused fieldset": {
            boxShadow: "0 2px 4px var(--primary-color-base) inset",
            border: "1px solid var(--primary-color-base)",
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
      startAdornment={
        <Stack marginRight={"18px"} >
          {rest.icon}
        </Stack>
      }
      sx={{
        borderRadius: "18px",
        backgroundColor: "white",
        fontFamily: "var(--font-base)",
        boxShadow: "0 2px 4px var(--gray-semilight) inset",

        "&.MuiOutlinedInput-root": {
          "& fieldset": {
            transition: "all 0.2s ease-out",
            border: "1px solid var(--gray-semilight)",
          },
          "&:hover fieldset": {
            border: "1px solid var(--gray-base)",
            boxShadow: "0 2px 4px var(--gray-base) inset",
          },
          "&.Mui-focused fieldset": {
            boxShadow: "0 2px 4px var(--primary-color-base) inset",
            border: "1px solid var(--primary-color-base)",
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
            borderRadius: "12px",
            backgroundColor: "var(--gray-semilight)",
            backdropFilter: "blur(5px)",
            boxShadow: "0 2px 4px var(--gray-semidark)",
            padding:"6px",
            "::-webkit-scrollbar": {
              width: "16px",
            },
            "::-webkit-scrollbar-track": {
              background: "var(--gray-semilight)",
              borderRadius: "12px",
              margin:"16px 0"
              
            },
            "::-webkit-scrollbar-thumb": {
              background: "var(--gray-semidark)",
              borderRadius: "12px",
              border:"4px solid var(--gray-semilight)",
              "&:hover":{
                cursor:"pointer",
                background: "var(--gray-dark)"
              }
            },
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
            color: "black",
            transition: "all 0.2s ease-out",
            backgroundColor: "white",
            boxShadow: "0 2px 4px var(--gray-base)",
            borderRadius: "12px",
            "&:hover, &.MuiMenuItem-root.Mui-selected:hover": {
              color: "white",
              backgroundColor: "var(--gray-dark)",

              boxShadow: "0 2px 4px var(--gray-semidark)",
            },
            fontFamily: "var(--font-base)",

            "&.MuiMenuItem-root.Mui-selected": {
              color: "white",
              backgroundColor: "var(--primary-color-base)",
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
