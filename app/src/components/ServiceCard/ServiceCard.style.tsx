import { Stack, styled } from "@mui/material"

const ServiceCardContainer = styled(Stack)({
  backgroundColor: "white",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  padding: "24px",
  borderRadius: "18px",
  boxShadow: "0px 3px 6px var(--gray-semilight)",
  gap: "24px",

  p: {
    fontFamily: "var(--font-base)",
  },

  ".service-title": {
    fontWeight: "600",
  },

  ".service-desc": {
    fontWeight: "400",
    color: "var(--gray-dark)",
  },

  a: {
    width: "100%",
    fontFamily: "var(--font-base)",
    fontWeight: "600",
    fontSize: "1.1rem",
    borderRadius: "18px",
    cursor: "pointer",
    backgroundColor: "var(--primary-color-base)",
    padding: "8px",
    boxShadow: "0 2px 4px var(--primary-color-light) inset",
    textDecoration: "none",
    color: "white",
    transition: "all 0.2s ease",
    "&:hover": {
      backgroundColor: "var(--primary-color-dark)",
      boxShadow: "0 2px 4px var(--primary-color-extradark) inset",
      color: "var(--primary-color-extralight)",
    },
  },
})

export default ServiceCardContainer
