import { styled, Stack } from "@mui/material";

const NavbarContainer = styled(Stack)({
  gap:"120px",
  background:"var(--white-op-dark)",
  boxShadow:"0px 3px 12px var(--black-op-light)",
  width: "100%",
  alignItems:"center",
  justifyContent:"center",


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