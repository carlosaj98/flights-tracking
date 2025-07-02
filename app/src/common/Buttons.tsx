import { Box, Button } from "@mui/material"
import { IconBack } from "./Icons"
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
      disableElevation
      sx={{
        textTransform: "none",
        fontFamily: "var(--font-base)",
        fontWeight: "600",
        fontSize: "1rem",
        borderRadius: "6px",
        backgroundColor: "var(--orange-400)",
        padding: "12px",
        color: "var(--orange-950)",
        transition: "all 0.2s ease",
        "&:hover": {
          backgroundColor: "var(--orange-300)",
          color: "var(--orange-900)",
        },
      }}
    >
      {text}
    </Button>
  )
}

// const ArrowButton: React.FC<ButtonsProp> = ({ text, action }) => {
//   return (
//     <Button
//       onClick={action}
//       variant="contained"
//       sx={{
//         backgroundColor: "red",
//         borderRadius: "18px",
//         fontSize: "1rem",
//       }}
//     >
//       <p>{text}</p>
//       <IconArrow direction="right" />
//     </Button>
//   )
// }

const BackButton: React.FC = () => {
  const navigate = useNavigate()
  return (
    <Button
      onClick={() => navigate("/")}
      sx={{
        display: "flex",
        borderRadius: "6px",
        paddingX: "12px",
        gap: "12px",
        cursor: "pointer",
        marginBottom: "24px",
        fontFamily: "var(--font-base)",
        fontWeight: "600",
        fontSize: "1rem",
        color: "var(--neutral-500)",
        svg: {
          fill: "var(--neutral-500)",
          transition: "all 0.2s ease",
        },
        "&:hover": {
          svg: {
            fill: "var(--blue-700)",
          },
          color: "var(--blue-700)",
          backgroundColor: "var(--blue-100)",
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
      sx={{
        width: "100%",
        textTransform: "none",
        fontFamily: "var(--font-base)",
        fontWeight: "600",
        color: "var(--blue-500)",
        fontSize: "14px",
        borderRadius: "6px",
        border:"1px solid var(--blue-200)",
        "&:hover": {
          color: "var(--blue-900)",
          backgroundColor: "var(--blue-100)",
          border:"1px solid transparent"
        },
      }}
    >
      More Details
    </Button>
  )
}

export { FormSubmitButton, BackButton, ButtonDetails }
