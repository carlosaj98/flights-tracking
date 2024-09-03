import { styled, Stack } from "@mui/material"

const HomePageContainer = styled(Stack)({
  width: "100%",
  minHeight: "100vh",
  backgroundColor: "var(--background-color)",

  section:{
    padding:"48px 0px"
  },

  "#hero-text-container": {
    gap: "24px",
  },

  "#hero-text-container h1": {
    fontSize: "2.5rem",
    fontWeight: "800",
    color: "black",
    heigth:"100%",

    span: {
      color: "var(--primary-color-base)",
    },
  },

  "#hero-text-container h2": {
    color: "var(--gray-semidark)",
    fontWeight: "500",
  },

  "#canvas-container:hover": {
    cursor: "grab",
  },

  "#canvas-container:active": {
    cursor: "grabbing",
  },

  ".animate__fadeInLeft": {
    animationDelay: "0.5s",
  },

  ".animate__fadeInRight": {
    animationDelay: "0.25s",
  },
})

export default HomePageContainer
