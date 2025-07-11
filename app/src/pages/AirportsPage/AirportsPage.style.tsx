import { Stack, styled } from "@mui/material"

const AirportsPageContainer = styled(Stack)({
  width: "100%",
  minHeight: "100vh",
  backgroundColor: "var(--background-color)",
  padding: " 32px 0",

  p: {
    fontFamily: "var(--font-base)",
  },

  h3: {
    fontSize: "1.5rem",
    fontWeight: "600",
    fontFamily: "var(--font-base)",
    color: "var(--neutral-800)",
  },

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

  h2: {
    color: "var(--neutral-600)",
    fontSize: "1.25rem",
    fontWeight: "500",
    heigth: "100%",
    fontFamily: "var(--font-base)",
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

  "#airport-country-code": {
    color: "var(--neutral-600)",
    fontSize: "1rem",
    fontWeight: "400",
    "& span": {
      color: "var(--blue-600)",
      fontWeight: "600",
    },
  },

  "#airports-count": {
    color: "var(--neutral-600)",
    fontSize: "1rem",
    fontWeight: "400",
    "& span": {
      color: "var(--blue-600)",
      fontWeight: "600",
    },
  },


  "#pagination": {
    fontSize: "1rem",
    color: "var(--neutral-600)",
    fontWeight: "500",
  },

  ".btn-pages": {
    backgroundColor: "var(--orange-400)",
    borderRadius: "6px",
    fontFamily: "var(--font-base)",
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
    jusifyContent: "center",
    gap: "6px",
    textTransform: "none",
    fontWeight: "600",
    padding: "6px",
    color: "var(--orange-950)",
    transition: "all 0.2s ease",
    svg: {
      fill: "var(--orange-950)",
    },

    "&:hover": {
      backgroundColor: "var(--orange-300)",
      color: "var(--orange-900)",
      svg: {
        fill: "var(--orange-900)",
      },
    },

    "&.Mui-disabled": {
      color: "var(--neutral-500)",
      backgroundColor: "var(--neutral-300)",
      boxShadow: "0 2px 4px var(--neutral-400) inset",
      svg: {
        fill: "var(--neutral-500)",
      },
    },
  },
  ".text-loader": {
    fontSize: "1.5rem",
    color: "var(--primary-color-extradark)",
  },
})

export default AirportsPageContainer
