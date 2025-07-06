import { Stack, styled } from "@mui/material"

const AirportCardContainer = styled(Stack)({
  backgroundColor: "white",
  justifyContent: "flex-start",
  alignItems: "center",
  padding: "24px",
  borderRadius: "6px",
  boxShadow: "0 2px 4px var(--neutral-200)",
  border: "1px solid var(--neutral-200)",
  gap: "12px",

  p: {
    fontFamily: "var(--font-base)",
  },

  ".airport-title-container": {
    justifyContent: "space-between",
    flexDirection: "row",
    gap: "12px",
    width: "100%",
    height: "60px",
    alignItems: "flex-start",
    "& .airport-name": {
      fontSize: "1.1rem",
      fontWeight: "600",
      color: "var(--neutral-800)",
      width: "100%",
      // whiteSpace:"nowrap",
      // overflow:"hidden",
      // textOverflow: "ellipsis"
    },
  },

  ".airport-code": {
    fontSize: "14px",
    fontWeight: "500",
    borderRadius: "18px",
    padding: "3px 6px",
    textAlign: "center",
  },

  ".airport-details-container": {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: "12px",
    width: "100%",
  },

  ".airport-details": {
    backgroundColor: "var(--neutral-100)",
    width:"100%",
    borderRadius: "6px",
    padding: "6px 12px",
    "& p:nth-of-type(1)": {
      fontSize: "14px",
      color:"var(--neutral-600)",
    },
    "& p:nth-of-type(2)": {
      fontSize: "14px",
      fontWeight:"500",
      color:"var(--neutral-800)"
    },
  },
  ".maps-button":{
    width:"100%",
    borderRadius:"6px",
    backgroundColor:"var(--blue-600)",
    padding:"6px 12px",
    justifyContent:"center",
    display:"flex",
    alignItems:"center",
    gap:"12px",
    color:"var(--blue-50)",
    transition: "all 0.2s ease",
    marginTop:"auto",
    "&:hover":{
      backgroundColor:"var(--blue-800)",
    },
    p:{
          fontSize:"14px",
    },
    svg:{
      fill:"var(--blue-50)"
    }
  }
})

export default AirportCardContainer
