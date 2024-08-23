import HeroDetailsContainer from "./HeroDetails.style"
import { FlightData } from "../../interfaces/flightData.interface"
import HeroDetailsHeader from "./HeroDetailsHeader"
import HeroDetailsContent from "./HeroDetailsContent"
import { Stack } from "@mui/material"

interface HeroDetailsProps {
  data: FlightData
}

const HeroDetails: React.FC<HeroDetailsProps> = ({ data }) => {
  return (
    <HeroDetailsContainer>
      <HeroDetailsHeader />
      <Stack
        className="content-details-container"
        flexDirection={{ lg: "row", xs: "column" }}
      >
        <HeroDetailsContent data={data.departure} title={"Departure"} />
        <HeroDetailsContent data={data.arrival} title={"Arrival"} />
      </Stack>
    </HeroDetailsContainer>
  )
}

export default HeroDetails
