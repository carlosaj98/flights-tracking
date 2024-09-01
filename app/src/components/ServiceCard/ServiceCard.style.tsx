import { Stack, styled } from "@mui/material"

const ServiceCardContainer = styled(Stack)({
  backgroundColor:"white",
  maxWidth: "350px",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: "24px",
  borderRadius: "18px",
  border:"2px solid var(--primary-color-base)",
  boxShadow:"0px 3px 6px var(--primary-color-base)",
  gap:"24px",

  p:{
    fontFamily:"var(--font-base)"
  },

  ".service-title":{
    fontWeight:"600",
  },

  ".service-desc":{
    fontWeight:"400",
    color:"var(--gray-dark)"
  }
})

export default ServiceCardContainer
