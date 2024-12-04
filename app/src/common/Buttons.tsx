import { Box, Button } from "@mui/material"
import { IconArrow, IconBack } from "./Icons"
import { useNavigate } from "react-router-dom"

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

const BackButton: React.FC = () => {
  const navigate = useNavigate()
  return (
    <Button
      onClick={() => navigate("/")}
      sx={{
        display: "flex",
        borderRadius: "12px",
        gap: "12px",
        cursor: "pointer",
        marginBottom: "24px",
        fontFamily: "var(--font-base)",
        fontWeight: "600",
        fontSize: "1rem",
        color: "var(--gray-dark)",
        svg: {
          fill: "var(--gray-base)",
          transition: "all 0.2s ease",
        },
        "&:hover": {
          svg: {
            fill: "var(--primary-color-dark)",
          },
          color: "var(--primary-color-dark)",
          backgroundColor: "var(--primary-color-extralight)",
        },
      }}
    >
      <Box height={"20px"} width={"20px"}>
        <IconBack />
      </Box>
      BACK
    </Button>
  )
}

const ButtonDetails: React.FC<ButtonsProp> = ({ action }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    action!()
    navigate("/flight")
  }
  return (
    <Button
      onClick={handleClick}
      variant="contained"
      sx={{
        height: { lg: "100%", xs: "50px" },
        width: { lg: "100px", xs: "100%" },
        textTransform: "none",
        fontFamily: "var(--font-base)",
        fontWeight: "500",
        color: "var(--gray-light)",
        fontSize: "1rem",
        borderRadius: "0px",
        backgroundColor: "var(--primary-color-base)",
        "&:hover": {
          color: "var(--primary-color-extralight)",
          backgroundColor: "var(--primary-color-extradark)",
        },
      }}
    >
      MORE DETAILS
    </Button>
  )
}

export { FormSubmitButton, ArrowButton, BackButton, ButtonDetails }
