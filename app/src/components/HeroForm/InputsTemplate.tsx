import { TextField, Select, MenuItem, Stack } from "@mui/material"
import { FieldValues } from "react-hook-form"

interface InputProps {
  field: FieldValues
  rest: FieldValues
}

const InputText: React.FC<InputProps> = ({ field, rest }) => {
  return (
    <TextField
      {...field}
      {...rest}
      InputProps={{
        startAdornment: (
          <Stack height={"100%"} width={"1rem"} marginRight={"12px"}>
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
        <Stack height={"100%"} width={"1rem"} marginRight={"12px"}>
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
          },
        },
      }}
    >
      {rest.options?.map((option: string) => (
        <MenuItem
          key={option}
          value={option}
          selected={false}
          divider
          sx={{
            padding: "12px 24px",
            color: "black",
            transition: "all 0.2s ease-out",
            backgroundColor: "white",
            border:"1px solid var(--gray-base)",
            boxShadow: "0 2px 4px var(--gray-base)",
            borderRadius: "12px",
            "&:hover, &.MuiMenuItem-root.Mui-selected:hover": {
              color: "white",
              backgroundColor: "var(--gray-semidark)",
              border:"1px solid var(--gray-semidark)",
              boxShadow: "0 2px 4px var(--gray-semidark)",
            },
            fontFamily: "var(--font-base)",

            "&.MuiMenuItem-root.Mui-selected": {
              backgroundColor: "var(--primary-color-extralight)",
            },
          }}
        >
          {option}
        </MenuItem>
      ))}
    </Select>
  )
}

export { InputText, InputSelect }
