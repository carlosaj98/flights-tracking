import { styled } from "@mui/material";

const ServicesFormContainer = styled("form")({
  display:"flex",
  flexDirection:"column",
  width:"100%",
  maxWidth:"40%",
  gap:"24px",
  backgroundColor:"white",
  padding:"18px",
  borderRadius:"18px",
  boxShadow:"0px 3px 6px var(--gray-semilight)",

  ".input-container":{

    display:"flex",
    flexDirection:"column",
    gap:"6px",
    color:"black",
    fontWeight:"600",
    fontSize:"1.1rem"
  },
})

export default ServicesFormContainer