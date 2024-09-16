import FlightsPageContainer from "./FlightsPage.style"
import { Container } from "@mui/material"

import ServicesForm from "../../components/ServicesForm/ServicesForm"

const FlightsPage: React.FC = () => {
  return (
    <FlightsPageContainer>
      <Container sx={{ height: "100%" }}>
        <ServicesForm/>
      </Container>
    </FlightsPageContainer>
  )
}
export default FlightsPage
