import { styled, Stack } from "@mui/material"

const HomePageContainer = styled(Stack)({
  width: "100%",
  height: "100vh",
  main: {
    width: "100%",
    height: "100%",
    flexDirection: "row",
    padding: "0 15vw",
  },

  "#canvas-container:hover":{
    cursor:"pointer"
  }
})

export default HomePageContainer
