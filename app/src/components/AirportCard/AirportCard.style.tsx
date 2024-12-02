import { Stack, styled } from "@mui/material";

const AirportCardContainer = styled(Stack)({
  backgroundColor: "white",
  justifyContent:"space-between",
  alignItems:"center",
  width:"350px",
  height:"200px",
  padding:"12px 24px",
  borderRadius:"18px",
  boxShadow:"0 2px 5px var(--gray-base)",
  gap:"12px",

  p:{
    fontFamily:"var(--font-base)",
  },

  ".airport-title-container":{
    justifyContent:"center",
    width:"100%",
    alignItems:"center",
    textAlign:"center",
    "& .airport-name":{
      fontSize:"1.25rem",
      fontWeight:"500",
      color:"var(--primary-color-extradark)"
    },
  },

  ".airport-code":{
    fontSize:"1.5rem",
    fontWeight:"600",
    color:"var(--primary-color-base)"
  },

  ".airport-coord-container":{
    flexDirection:"row",
    justifyContent:"center",
    gap:"48px",
    width:"100%",
    textAlign:"center",
    "& .coord-title":{
      fontSize:"1.1rem",
      fontWeight:"500",
      color:"var(--gray-base)"
    },
  
    "& .airport-coord":{
      fontSize:"1.1rem",
      fontWeight:"600",
      color:"var(--gray-dark)"
    },
  }
})

export default AirportCardContainer