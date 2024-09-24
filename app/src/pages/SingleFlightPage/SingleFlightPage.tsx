import SectionMain from "./sections/SectionMain"
import SingleFlightPageContainer from "./SingleFlightPage.style"
import { Container } from "@mui/material"

const SingleFlightPage: React.FC = () => {
  return (
    <SingleFlightPageContainer>
      <Container sx={{ height: "100%" }}>
        <SectionMain />
      </Container>
    </SingleFlightPageContainer>
  )
}
export default SingleFlightPage
