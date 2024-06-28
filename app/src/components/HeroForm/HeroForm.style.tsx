import { styled } from "@mui/material";

const CustomForm = styled("form")({
  display:"flex",
  flexDirection:"column",
  width:"100%",
  gap:"24px",
  backgroundColor:"var(--secondary-color-base)",
  padding:"12px",
  borderRadius:"12px",
  boxShadow:"0 6px 12px var(--secondary-color-dark)",

  ".input-container":{

    display:"flex",
    flexDirection:"column",
    gap:"6px",
    color:"var(--secondary-color-dark)",
    fontWeight:"600"
  },

})

export default CustomForm