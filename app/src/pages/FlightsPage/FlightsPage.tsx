import FlightsPageContainer from "./FlightsPage.style"
import { Container, Stack, Typography } from "@mui/material"
import formFields from "./configs/formFields"

import ServicesForm from "../../components/ServicesForm/ServicesForm"
import HeroGlobe from "../../components/HeroGlobe/HeroGlobe"

const FlightsPage: React.FC = () => {
  return (
    <FlightsPageContainer>
      <Container sx={{ height: "100%" }}>
        <Stack alignItems={"center"}>
          <Typography variant="h1">
            Find various <span>flights</span>
          </Typography>
        </Stack>
        <Stack marginTop={"64px"} flexDirection={"row"} alignItems={"center"}>
          <ServicesForm formFields={formFields} />
          <HeroGlobe/>
        </Stack>
      </Container>
    </FlightsPageContainer>
  )
}
export default FlightsPage
