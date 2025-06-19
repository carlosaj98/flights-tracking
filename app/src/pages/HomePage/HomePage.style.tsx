import { styled, Stack } from "@mui/material"

const HomePageContainer = styled(Stack)({
  width: "100%",
  minHeight: "100vh",
  backgroundColor: "var(--background-color)",


  "#hero-text-container": {
    gap: "24px",
  },

  "#hero-text-container h1": {
    fontSize: "2.5rem",
    fontWeight: "800",
    color: "black",

    span: {
      color: "var(--blue-500)",
    },
  },

  "#hero-text-container h2": {
    color: "var(--neutral-600)",
    fontSize: "1.25rem",
    fontWeight: "500",
  },

  h3: {
    color: "var(--neutral-800)",
    fontSize: "2rem",
    fontWeight: "600",
    fontFamily: "var(--font-base)",
  },

  "#canvas-container:hover": {
    cursor: "grab",
  },

  "#canvas-container:active": {
    cursor: "grabbing",
  },

  ".animate__zoomInDown": {
    animationDelay: "0.5s",
  },

  "#contact-text span": {
    fontWeight: "600",
  },

  "#contact-text a": {
    fontWeight: "600",
    textDecoration: "none",
    color: "var(--primary-color-base)",
    ":hover": {
      color: "var(--primary-color-dark)",
    },
  },
})

export default HomePageContainer
