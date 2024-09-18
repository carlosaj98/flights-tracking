import { Stack, styled } from "@mui/material";

const FlightDetailCardContainer = styled(Stack)({
  flexDirection:"row",
  alignItems:"center",
  height:"200px",
  borderRadius:"18px",
  boxShadow:"0 2px 5px var(--gray-base)",
  backgroundColor:"white",
  overflow:"hidden",

  p:{
    fontFamily: "var(--font-base)"
  },

  ".details-container":{
    padding:"32px",
    height:"100%",

    "&:nth-of-type(1)":{
      justifyContent:"center",
      borderRight:"2px dashed var(--gray-semidark)",
      backgroundColor:"var(--gray-light)",
      width:"500px"
    },
    "&:nth-of-type(2)":{
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center",
      width:"100%",
      gap:"32px",
      borderRight:"2px solid var(--gray-base)"
    },
    "&:nth-of-type(3)":{
      flexDirection:"row",
      alignItems:"center",
      gap:"12px",
      width:"300px"
    },
  },

  ".details-arrival, .details-departure":{
    width:"100%",
    alignItems:"center"
  },

  ".flight-num":{
    fontSize:"1.75rem",
    fontWeight:"500",
    color:"black"
  },

  ".airports-code":{
    fontSize:"1.75rem",
    fontWeight:"500",
    color:"var(--primary-color-base)"
  },

  ".airports-name":{
    fontSize:"1.2rem",
    fontWeight:"500",
    color:"var(--primary-color-extradark)"
  },
})

export default FlightDetailCardContainer