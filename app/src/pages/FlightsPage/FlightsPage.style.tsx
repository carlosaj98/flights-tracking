import { Stack, styled } from "@mui/material"

const FlightsPageContainer = styled(Stack)({
  width: "100%",
  minHeight: "100vh",
  backgroundColor: "var(--background-color)",

  h1: {
    fontSize: "2.5rem",
    fontWeight: "800",
    color: "black",
    heigth: "100%",
    fontFamily: "var(--font-base)",
    span: {
      color: "var(--primary-color-base)",
    },
  },
  canvas: {
    borderRadius: "100%",
    "&:hover": {
      cursor: "grab",
    },
    "&:active": {
      cursor: "grabbing",
    },
  },
})

export default FlightsPageContainer
