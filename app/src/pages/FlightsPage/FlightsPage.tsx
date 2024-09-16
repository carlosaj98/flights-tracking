import FlightsPageContainer from "./FlightsPage.style"
import { Container } from "@mui/material"
import formFields from "./configs/formFields"

import ServicesForm from "../../components/ServicesForm/ServicesForm"

const FlightsPage: React.FC = () => {
  return (
    <FlightsPageContainer>
      <Container sx={{ height: "100%" }}>
        <ServicesForm formFields={formFields}/>
      </Container>
    </FlightsPageContainer>
  )
}
export default FlightsPage
