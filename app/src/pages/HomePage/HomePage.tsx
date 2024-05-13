import Navbar from "../../components/Navbar/Navbar"
import HomePageContainer from "./HomePage.style"

import { Stack } from "@mui/material"
const HomePage: React.FC = () => {
  return (
    <HomePageContainer sx={{ alignItems: "center" }}>
      <Navbar />
      <Stack component={"main"}>HomePage</Stack>
    </HomePageContainer>
  )
}
export default HomePage
