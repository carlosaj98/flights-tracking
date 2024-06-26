import Navbar from "../../components/Navbar/Navbar"
import HeroGlobe from "../../components/HeroGlobe/HeroGlobe"
import HomePageContainer from "./HomePage.style"
import HeroForm from "../../components/HeroForm/HeroForm"

import { Stack, Box, Container } from "@mui/material"
import formFields from "./configs/formFields"

const HomePage: React.FC = () => {
  return (
    <HomePageContainer sx={{ alignItems: "center" }}>
      <Navbar />
      <Container sx={{ height: "100%" }}>
        <Stack
          component={"main"}
          flexDirection={{ md: "row", sm: "column" }}
          alignItems={"center"}
          justifyContent={{ md: "center", sm: "flex-start" }}
        >
          <Stack
            id="hero-text-container"
            className="animate__animated animate__fadeInLeft"
          >
            <Stack>
              <h1>
                ¡Encuentra tu <span>Vuelo</span>!
              </h1>
              <h2>
                Rastrea vuelos en tiempo real con la posibilidad de
                visualizarlos en 3D.
              </h2>
            </Stack>

            <HeroForm formFields={formFields} />
          </Stack>

          <Box
            id="canvas-container"
            className="animate__animated animate__fadeInRight"
          >
            <HeroGlobe />
          </Box>
        </Stack>
      </Container>
    </HomePageContainer>
  )
}
export default HomePage
