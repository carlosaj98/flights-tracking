import { Stack, styled } from "@mui/material"

const SocialLinksContainer = styled(Stack)({
  flexDirection:"row",
  gap: "24px",
  marginTop:"12px",

  ".social-media-links, .social-media-links svg": {
    textDecoration: "none",
    color: "var(--gray-base)",
    cursor: "pointer",
    transition: "scale 0.15s ease-out, fill 0.15s ease-out",
    fill: "var(--gray-base)",
    "&:hover": {
      scale: "1.2",
      fill: "var(--gray-dark)",
    },
  },

  ".mail-container": {
    fill: "var(--gray-base)",
    color: "var(--gray-semidark)",
  },
})

export default SocialLinksContainer
