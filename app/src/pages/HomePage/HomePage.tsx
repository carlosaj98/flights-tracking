// import Navbar from "../../components/Navbar/Navbar"
import HomePageContainer from "./HomePage.style"
import SectionMain from "./sections/SectionMain"
// import SectionServices from "./sections/SectionServices"
import { Container } from "@mui/material"

const HomePage: React.FC = () => {
  return (
    <HomePageContainer sx={{ alignItems: "center" }}>
      {/* <Navbar /> */}
      <Container sx={{ height: "100%" }}>
        <SectionMain />
        {/* <SectionServices/> */}
      </Container>
    </HomePageContainer>
  )
}
export default HomePage
