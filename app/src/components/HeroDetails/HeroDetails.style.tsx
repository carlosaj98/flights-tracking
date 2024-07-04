import { Stack, styled } from "@mui/material"

const HeroDetailsContainer = styled(Stack)({
  width: "100%",
  height: "100%",
  borderRadius: "18px",
  boxShadow: "0 3px 6px var(--black-op-dark)",
  backgroundColor: "var(--black-op-light)",

  "#header-details-container": {
    borderRadius: "18px 18px 0px 0px",
    padding: "18px",
    color: "black",
  },

  ".header-text-title": {
    fontSize: "1.3rem",
    fontWeight: "500",
  },

  ".header-text-subtitle": {
    color:"var(--black-op-dark)"
  },

  "#content-details-container":{
    height:"100%",
    gap:"3px"
  },

  "#content-details-departure, #content-details-arrival":{
    height:"100%",
    backgroundColor: "white",
    padding: "18px",
  }
})

export default HeroDetailsContainer
