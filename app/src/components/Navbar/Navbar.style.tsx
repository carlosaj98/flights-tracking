import { styled, Stack } from "@mui/material";

const NavbarContainer = styled(Stack)({
  background:"linear-gradient(white, var(--main-color-bg))",
  width: "100%",
  alignItems:"center",
  justifyContent:"center",
  position:"static",


  "div > img":{
    width:"65px",
    height:"65px"
  },

  img:{
    width:"100%",
    height:"100%",
  }
})

export default NavbarContainer