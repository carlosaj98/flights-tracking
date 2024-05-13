import NavbarContainer from "./Navbar.style"
import { Box, Stack } from "@mui/material"

const Navbar: React.FC = () => {
  return (
    <NavbarContainer sx={{ flexDirection: "row" }}>
      <Stack
        sx={{ marginLeft: "120px", flexDirection: "row", alignItems: "center" }}
      ></Stack>
      <Stack sx={{ flexDirection: "row", gap: "64px", alignItems: "center" }}>
        <div>Home</div>
        <div>About us</div>
        <Box>
          <img src="/logo_variante3.png" alt="" />
        </Box>
        <div>Services</div>
        <div>Contact</div>
      </Stack>
    </NavbarContainer>
  )
}
export default Navbar
