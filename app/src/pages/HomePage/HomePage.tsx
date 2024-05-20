import Navbar from "../../components/Navbar/Navbar"
import HeroGlobe from "../../components/HeroGlobe/HeroGlobe"
import HomePageContainer from "./HomePage.style"

import { Stack } from "@mui/material"
const HomePage: React.FC = () => {
  return (
    <HomePageContainer sx={{ alignItems: "center" }}>
      <Navbar />
      <Stack component={"main"} alignItems={"center"} justifyContent={"center"}>
        <HeroGlobe/>
      </Stack>
    </HomePageContainer>
  )
}
export default HomePage
