import { styled, Stack } from "@mui/material";

const HomePageContainer = styled(Stack)({
  width: "100%",
  height:"100vh",
  background:"url(/bg.jpg) no-repeat",
  backgroundSize:"cover",
  backgroundPosition:"center",
  main:{
    width:"100%",
    height:"100%",
    flexDirection: "row",
    padding:"0 15vw",
  },

  "#plane":{
    position:"absolute",
    left:"30vw"
  }
  
})

export default HomePageContainer