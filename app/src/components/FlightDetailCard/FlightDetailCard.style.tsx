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
    justifyContent:"center",
    height:"100%",

    "&:nth-of-type(1)":{
      width:"400px",
      borderRight:"2px solid var(--gray-base)",
      backgroundColor:"var(--gray-light)"
    },
    "&:nth-of-type(3)":{
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
      gap:"12px"
    },
    "&:nth-of-type(4)":{
      backgroundColor:"var(--secondary-color-base)"
    },
  }
})

export default FlightDetailCardContainer