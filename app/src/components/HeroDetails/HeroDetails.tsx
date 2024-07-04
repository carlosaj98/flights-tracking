import { Box, Stack } from "@mui/material"
import HeroDetailsContainer from "./HeroDetails.style"
import { IconPlane } from "../../common/Icons"
import { FlightData } from "../../interfaces/flightData.interface"

interface HeroDetailsProps {
  data: FlightData[]
}

const HeroDetails: React.FC<HeroDetailsProps> = ({ data }) => {
  return (
    <HeroDetailsContainer>
      <Stack
        flexDirection={"row"}
        justifyContent={"space-between"}
        id="header-details-container"
      >
        <Stack>
          <p className="header-text-title">UA2402</p>
          <p className="header-text-subtitle">United Airlines (UA)</p>
        </Stack>
        <Stack
          flexDirection={"row"}
          gap={"48px"}
          justifyContent={"center"}
          textAlign={"center"}
          alignItems={"center"}
        >
          <Stack>
            <p className="header-text-title">LAX</p>
            <p className="header-text-subtitle">Los Angeles Int.</p>
          </Stack>
          <Box height={"50%"}>
            <IconPlane />
          </Box>
          <Stack>
            <p className="header-text-title">BOS</p>
            <p className="header-text-subtitle">Logan Int.</p>
          </Stack>
        </Stack>
        <Stack>
          <p className="header-text-title">Airborne</p>
          <p className="header-text-subtitle">On Time</p>
        </Stack>
      </Stack>
      <Stack id="content-details-container" flexDirection={"row"} justifyContent={"space-between"}>
        <Stack id="content-details-departure" alignItems={"center"} flexGrow={"1"}>
          {data.map(() => {
            return (
              <>
                <p>Departure</p>
                <Stack></Stack>
              </>
            )
          })}
        </Stack>
        <Stack id="content-details-arrival" alignItems={"center"} flexGrow={"1"}>
          {" "}
          {data.map(() => {
            return (
              <>
                <p>Departure</p>
                <Stack></Stack>
              </>
            )
          })}
        </Stack>
      </Stack>
    </HeroDetailsContainer>
  )
}

export default HeroDetails
