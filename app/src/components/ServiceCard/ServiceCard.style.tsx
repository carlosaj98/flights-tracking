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
    fontFamily: "var(--font-base)",
    fontWeight: "500",
    fontSize: "1rem",
    borderRadius: "24px",
    cursor: "pointer",
    backgroundColor: "var(--blue-600)",
    padding: "8px 24px",
    textDecoration: "none",
    color: "var(--blue-50)",
    transition: "all 0.2s ease",
    "&:hover": {
      backgroundColor: "var(--blue-800)",
      color: "var(--neutral-50)",
    },
  },
})

export default ServiceCardContainer
