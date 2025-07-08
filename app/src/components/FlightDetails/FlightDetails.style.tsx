import { Stack, styled } from "@mui/material"

const FlightDetailsContainer = styled(Stack)({
  width: "100%",
  borderRadius: "6px",
  boxShadow: "0 3px 3px var(--neutral-300)",
  backgroundColor: "var(--blue-600)",
  overflow: "clip",

  p: {
    fontFamily: "var(--font-base)",
  },

  "#header-details-container": {
    padding: "18px",
    color: "var(--neutral-50)",
  },

  ".header-details-item": {
    width: "100%",
    svg:{
      fill:"var(--blue-50)"
    }
  },

  ".header-text-title": {
    fontWeight: "600",
  },

  ".header-text-subtitle": {
    color: "var(--blue-200)",
  },

  ".content-details-container": {
    height: "100%",
    gap: "2px",
  },

  ".card-container": {
    height: "100%",
    width: "100%",
    alignItems: "center",
    backgroundColor: "white",
  },

  ".direction-title": {
    padding: "3px 9px",
    border: "1px solid var(--blue-600)",
    borderRadius: "18px",
    fontSize: "12px",
    color: "var(--blue-600)",
    fontWeight: "500",
    marginBottom: "6px",
  },

  ".airport-container": {
    width: "100%",
    alignItems: "center",
    textAlign: "center",
    fontWeight: "500",
    gap: "3px",
  },

  ".airport-name": {
    fontWeight: "500",
    fontSize: "1.15rem",
    color: "var(--neutral-800)",
  },

  ".airport-code-container": {
    width: "100%",
    justifyContent: "center",
    p: {
      color: "var(--neutral-600)",
      fontSize: "14px",
    },
  },

  ".date-container": {
    width: "100%",
    backgroundColor: "var(--neutral-100)",
    gap: "6px",
    justifyContent: "center",
    padding: "6px 0px",
    p:{
      fontSize:"14px",
      color:"var(--neutral-800)"
    },
    "& p:nth-of-type(1)": {
      borderBottom: "2px solid white",
      fontWeight: "500",
    },
  },

  ".shipment-container": {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    textAlign: "center",
    gap: "18px",
    marginTop:"6px"
  },

  ".shipment-info": {
    flexDirection: "row",
    justifyContent: "center",
    gap: "6px",
    width: "100%",
    backgroundColor: "var(--blue-50)",
    borderRadius: "18px",
    padding:"2px",
    p: {
      fontSize: "14px",
      color: "var(--neutral-800)",
      fontWeight: "500",
    },

    "& p:nth-of-type(2)": {
      fontWeight: "600",
      color: "var(--blue-600)",
    },
  },
})

export default FlightDetailsContainer
