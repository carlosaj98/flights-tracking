import { Button } from "@mui/material"

interface ButtonsProp {
  text: string
}

const FormSubmitButton: React.FC<ButtonsProp> = ({ text }) => {
  return (
    <Button
      type="submit"
      variant="contained"
      sx={{
        textTransform: "none",
        fontFamily: "var(--font-base)",
        fontWeight:"600",
        fontSize: "1.1rem",
        borderRadius: "18px",
        backgroundColor: "var(--secondary-color-base)",
        padding: "12px",
        boxShadow: "0 2px 4px var(--secondary-color-light) inset",
        color:"var(--secondary-color-extradark)",
        transition: "all 0.2s ease",
        "&:hover": {
          backgroundColor: "var(--secondary-color-dark)",
          boxShadow: "0 2px 4px var(--secondary-color-extradark) inset",
          color:"var(--secondary-color-extralight)"
        },

        "&:focus": {
          backgroundColor: "var(--gray-semilight)",
          boxShadow: "0 2px 4px var(--gray-semidark) inset",
          color:"var(--gray-dark)"
        },
      }}
    >
      {text}
    </Button>
  )
}

export {FormSubmitButton}
