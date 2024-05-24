import { styled, Stack } from "@mui/material"

const HomePageContainer = styled(Stack)({
  width: "100%",
  height: "100vh",
  overflowX: "hidden",

  main: {
    width: "100%",
    height: "100%",
  },

  "#hero-text-container": {},

  "#hero-text-container h1": {
    fontSize: "2.75rem",
    fontWeight: "800",
    color: "var(--primary-color-semidark)",

    span: {
      color: "var(--secondary-color-base)",
    },
  },

  "#hero-text-container h2": {
    color: "var(--primary-color-dark)",
    fontWeight: "600",
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
