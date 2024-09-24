import { Stack, styled } from "@mui/material";

const SingleFlightPageContainer = styled(Stack)({
  width: "100%",
  minHeight: "100vh",
  backgroundColor: "var(--background-color)",
  padding: " 64px 0",

  h1: {
    fontSize: "2.5rem",
    fontWeight: "800",
    color: "black",
    heigth: "100%",
    fontFamily: "var(--font-base)",
    span: {
      color: "var(--primary-color-base)",
    },
  },

  h2: {
    fontSize: "1.5rem",
    fontWeight: "500",
    color: "var(--gray-semidark)",
    heigth: "100%",
    fontFamily: "var(--font-base)",
  },

  
})

export default SingleFlightPageContainer