import { Stack, styled } from "@mui/material"

const FlightDetailsContainer = styled(Stack)({
  width: "100%",
  borderRadius: "18px",
  boxShadow: "0 3px 6px var(--gray-semilight)",
  backgroundColor: "var(--primary-color-base)",
  overflow: "clip",

  p: {
    fontFamily: "var(--font-base)",
  },

  "#header-details-container": {
    borderRadius: "18px 18px 0px 0px",
    padding: "18px",
    color: "white",
  },

  ".header-details-item": {
    width: "100%",
  },

  ".header-text-title": {
    fontWeight: "500",
  },

  ".header-text-subtitle": {
    color: "var(--primary-color-extralight)",
  },

  ".content-details-container": {
    height: "100%",
    gap: "3px",
  },

  ".card-container": {
    height: "100%",
    width: "100%",
    alignItems: "center",
    backgroundColor: "white",
  },

  ".direction-title": {
    backgroundColor: "var(--primary-color-extralight)",
    color: "var(--primary-color-extradark)",
    padding: "6px 18px",
    borderRadius: "18px",
    fontWeight: "500",
  },

  ".airport-container": {
    width: "100%",
    alignItems: "center",
    textAlign: "center",
    fontWeight: "500",
  },

  ".airport-name": {
    fontWeight: "500",
  },

  ".airport-code-container": {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    color: "var(--gray-dark)",
  },

  ".date-container": {
    width: "100%",
    backgroundColor: "var(--gray-light)",
    gap: "6px",
    justifyContent: "center",
    padding: "6px 0px",
    "& p:nth-of-type(1)": {
      borderBottom: "2px solid black",
      fontWeight: "500",
    },
  },

  ".site-container": {
    flexDirection: "row",
    alignSelf: "center",
    gap: "12px",
    backgroundColor: "var(--gray-semidark)",
    padding: "6px 8px",
    borderRadius: "18px",
    color: "white",
    fontWeight: "500",
    "& p:nth-of-type(2)": {
      backgroundColor: "white",
      width: "60px",
      color: "black",
      borderRadius: "18px",
    },
  },
})

export default FlightDetailsContainer
