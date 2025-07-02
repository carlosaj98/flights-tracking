import { Stack, styled } from "@mui/material"

const FlightDetailCardContainer = styled(Stack)({
  borderRadius: "6px",
  boxShadow: "0 2px 4px var(--neutral-200)",
  backgroundColor: "white",
  border: "1px solid var(--neutral-200)",
  padding: "18px",
  gap: "12px",

  p: {
    fontFamily: "var(--font-base)",
  },

  ".card-header-info": {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },

  ".flight-status": {
    fontSize: "14px",
    padding: "4px 12px",
    borderRadius: "18px",
  },

  ".flight-header-details": {
    p: {
      fontSize: "14px",
      color: "var(--neutral-600)",
    },

    "p:nth-of-type(1)": {
      fontSize: "1.2rem",
      fontWeight: "600",
      color: "var(--blue-600)",
    },
  },

  ".card-body-info": {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "12px",
  },

  ".location-container": {
    width: "100%",
    justifyContent: "flex-start",
    height: "100%",
  },

  ".airports-iata": {
    fontSize: "1rem",
    color: "var(--neutral-800)",
    fontWeight: "600",
  },

  ".location-details": {
    height: "100%",
    justifyContent: "space-between",
    p: {
      fontSize: "14px",
      fontWeight: "400",
      color: "var(--neutral-600)",
      "&:nth-of-type(2)": {
        color: "var(--neutral-600)",
        fontWeight: "600",
      },
    },
  },
})

export default FlightDetailCardContainer
