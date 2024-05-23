import NavbarContainer from "./Navbar.style"
import { Box, Stack } from "@mui/material"

const Navbar: React.FC = () => {
  return (
    <NavbarContainer sx={{ flexDirection: "row" }}>
      <Stack
        sx={{ flexDirection: "row", alignItems: "center" }}
      ></Stack>
      <Stack sx={{ flexDirection: "row", gap: "64px", alignItems: "center" }}>
        <div>Home</div>
        <div>Services</div>
        <Box>
          <img src="/logo.png" alt="" />
        </Box>
        <div>About us</div>
        <div>Contact</div>
      </Stack>
    </NavbarContainer>
  )
}
export default Navbar
