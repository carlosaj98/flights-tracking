import { styled } from "@mui/material"

const ServicesFormContainer = styled("form")({
  display:"flex",
  flexDirection:"column",
  width:"100%",
  gap:"24px",
  backgroundColor:"var(--neutral-50)",
  padding:"18px",
  borderRadius:"6px",
  boxShadow:"0px 3px 6px var(--neutral-300)",

  ".input-container":{

    display:"flex",
    flexDirection:"column",
    gap:"6px",
    color:"var(--neutral-800)",
    fontWeight:"500",
    fontSize:"1rem"
  },

  ".custom-error-text": {
    fontFamily: "var(--font-base)",
    fontWeight: "500",
    fontSize:"0.8rem"
  },
})

export default ServicesFormContainer
