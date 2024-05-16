import Navbar from "../../components/Navbar/Navbar"
import HomePageContainer from "./HomePage.style"

import { Box, Stack } from "@mui/material"
const HomePage: React.FC = () => {
  return (
    <HomePageContainer sx={{ alignItems: "center" }}>
      <Navbar />
      <Stack component={"main"} alignItems={"center"}>
        <Box width={"70%"}></Box>
        {/* <Box id="plane" width={"2000px"}><img src="/plane.png" width={"100%"}/></Box> */}
      </Stack>
    </HomePageContainer>
  )
}
export default HomePage
