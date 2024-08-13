import { Box, Stack } from "@mui/material"
import HeroGlobe from "../../../components/HeroGlobe/HeroGlobe"
import HeroDetails from "../../../components/HeroDetails/HeroDetails"
import HeroForm from "../../../components/HeroForm/HeroForm"
import formFields from "../configs/formFields"
import heroDetailsData from "../configs/heroDetailsData"

const SectionMain: React.FC = () => {
  return (
    <Stack
      component={"section"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Stack id="hero-container" flexDirection={"row"}>
        <Stack
          id="hero-text-container"
          className="animate__animated animate__fadeInLeft"
        >
          <Stack>
            <h1>
              Find your <span>Flight</span>!
            </h1>
            <h2>
              Track flights in real time with the possibility of visualize them
              in 3D.
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
      <HeroDetails data={heroDetailsData[0]} />
    </Stack>
  )
}
export default SectionMain
