import { styled } from "@mui/material";

const CustomForm = styled("form")({
  display:"flex",
  flexDirection:"column",
  width:"100%",
  gap:"24px",
  backgroundColor:"var(--secondary-color-base)",
  padding:"18px",
  borderRadius:"18px",
  boxShadow:"0 2px 4px var(--black-op-dark)",

  ".input-container":{

    display:"flex",
    flexDirection:"column",
    gap:"6px",
    color:"var(--secondary-color-dark)",
    fontWeight:"600",
    fontSize:"1.1rem"
  },

})

export default CustomForm