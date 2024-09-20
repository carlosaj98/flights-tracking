import { Button } from "@mui/material"
import { IconArrow } from "./Icons"

interface ButtonsProp {
  text?: string
  action?: () => void
}

const FormSubmitButton: React.FC<ButtonsProp> = ({ text }) => {
  return (
    <Button
      type="submit"
      variant="contained"
      sx={{
        textTransform: "none",
        fontFamily: "var(--font-base)",
        fontWeight: "600",
        fontSize: "1.1rem",
        borderRadius: "18px",
        backgroundColor: "var(--secondary-color-base)",
        padding: "12px",
        boxShadow: "0 2px 4px var(--secondary-color-light) inset",
        color: "var(--secondary-color-extradark)",
        transition: "all 0.2s ease",
        "&:hover": {
          backgroundColor: "var(--secondary-color-dark)",
          boxShadow: "0 2px 4px var(--secondary-color-extradark) inset",
          color: "var(--secondary-color-extralight)",
        },
      }}
    >
      {text}
    </Button>
  )
}

const ArrowButton: React.FC<ButtonsProp> = ({ text, action }) => {
  return (
    <Button
      onClick={action}
      variant="contained"
      sx={{
        backgroundColor: "var(--primary-color-base)",
        borderRadius: "18px",
        fontSize: "1rem",

      }}
    >
      <p>{text}</p>
      <IconArrow direction="right" />
    </Button>
  )
}

export { FormSubmitButton, ArrowButton }
