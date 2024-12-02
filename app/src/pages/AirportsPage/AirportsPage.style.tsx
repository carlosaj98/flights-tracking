import { Stack, styled } from "@mui/material"

const AirportsPageContainer = styled(Stack)({
  width: "100%",
  minHeight: "100vh",
  backgroundColor: "var(--background-color)",
  padding: " 64px 0",

  p:{
    fontFamily: "var(--font-base)",
  },

  h3: {
    fontSize: "2.25rem",
    fontWeight: "600",
    heigth: "100%",
    fontFamily: "var(--font-base)",
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
    fontSize: "1.5rem",
    fontWeight: "500",
    color: "var(--gray-semidark)",
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

  "#airport-country-code":{
    color:"var(--gray-semidark)",
    fontWeight:"500",
    fontSize:"1.1rem",
    "& span":{
      color:"var(--primary-color-base)",
      fontWeight:"600"
    }
  },

  "#airports-count":{
    color:"var(--gray-semidark)",
    fontWeight:"500",
    fontSize:"1.1rem",
    "& span":{
      color:"var(--primary-color-base)",
      fontWeight:"600"
    }
  },
  
  "#pagination":{
    fontSize: "1.1rem",
    color: "var(--gray-dark)",
    fontWeight: "500",
  },

  ".btn-pages": {
    backgroundColor: "var(--secondary-color-base)",
    borderRadius: "18px",
    fontFamily: "var(--font-base)",
    fontSize: "1rem",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    textTransform: "none",
    fontWeight: "600",
    padding: "12px",
    boxShadow: "0 2px 4px var(--secondary-color-light) inset",
    color: "var(--secondary-color-extradark)",
    transition: "all 0.2s ease",
    svg: {
      fill: "var(--secondary-color-extradark)",
    },

    "&:hover": {
      backgroundColor: "var(--secondary-color-dark)",
      boxShadow: "0 2px 4px var(--secondary-color-extradark) inset",
      color: "var(--secondary-color-extralight)",
      svg: {
        fill: "var(--secondary-color-extralight)",
      },
    },

    "&.Mui-disabled": {
      color: "var(--gray-dark)",
      backgroundColor: "var(--gray-semilight)",
      boxShadow: "0 2px 4px var(--gray-dark) inset",
      svg: {
        fill: "var(--gray-dark)",
      },
    },
  },
  ".text-loader":{
    fontSize: "1.5rem",
    color: "var(--primary-color-extradark)",
  },
})

export default AirportsPageContainer
