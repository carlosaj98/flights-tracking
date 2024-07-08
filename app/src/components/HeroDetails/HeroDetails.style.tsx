import { Stack, styled } from "@mui/material"

const HeroDetailsContainer = styled(Stack)({
  width: "100%",
  borderRadius: "18px",
  boxShadow: "0 3px 6px var(--black-op-dark)",
  backgroundColor: "var(--primary-color-base)",

  overflow: "clip",

  "#header-details-container": {
    borderRadius: "18px 18px 0px 0px",
    padding: "18px",
    color: "white",
  },

  ".header-details-item": {
    width: "100%",
    "&:nth-child(1)": {
      alignItems: "flex-start",
    },
    "&:nth-child(2)": {
      flexDirection: "row",
    },
    "&:nth-child(3)": {
      alignItems: "flex-end",
    },
  },

  ".header-text-title": {
    fontSize: "1.3rem",
    fontWeight: "500",
  },

  ".header-text-subtitle": {
    color: "var(--white-op-dark)",
  },

  "#content-details-container": {
    height: "100%",
    gap: "3px",
  },

  "#content-details-departure, #content-details-arrival": {
    height: "100%",
    backgroundColor: "white",
    padding: "18px",
  },

  "#content-details-departure": {
    borderRadius: "0 18px 0 0",
  },
  "#content-details-arrival": {
    borderRadius: "18px 0 0 0",
  },
})

export default HeroDetailsContainer
