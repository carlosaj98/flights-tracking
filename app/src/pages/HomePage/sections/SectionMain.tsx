import { Stack } from "@mui/material"
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
      gap={"32px"}
    >
      <Stack
        id="hero-container"
        flexDirection={{ lg: "row", xs: "column" }}
        alignItems={"center"}
      >
        <Stack
          id="hero-text-container"
          className="animate__animated animate__fadeInLeft"
        >
          <Stack textAlign={{ lg: "left", xs: "center" }}>
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

        <Stack
          id="canvas-container"
          className="animate__animated animate__fadeInRight"
          alignItems={"center"}
        >
          <HeroGlobe />
        </Stack>
      </Stack>
      <HeroDetails data={heroDetailsData[0]} />
    </Stack>
  )
}
export default SectionMain
