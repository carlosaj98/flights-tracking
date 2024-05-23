import Navbar from "../../components/Navbar/Navbar"
import HeroGlobe from "../../components/HeroGlobe/HeroGlobe"
import HomePageContainer from "./HomePage.style"

import { Stack, Box } from "@mui/material"
const HomePage: React.FC = () => {
  return (
    <HomePageContainer sx={{ alignItems: "center" }}>
      <Navbar />
      <Stack component={"main"} alignItems={"center"} justifyContent={"center"}>
        <Stack>
          <h1>
            Find Your <span>Flight</span>
          </h1>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            vitae pulvinar est.
          </h2>
        </Stack>

        <Box id="canvas-container">
          <HeroGlobe />
        </Box>
      </Stack>
    </HomePageContainer>
  )
}
export default HomePage
