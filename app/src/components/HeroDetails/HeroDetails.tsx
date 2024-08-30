import HeroDetailsContainer from "./HeroDetails.style"
import { FlightData } from "../../interfaces/flightData.interface"
import HeroDetailsHeader from "./HeroDetailsHeader"
import HeroDetailsContent from "./HeroDetailsContent"
import { Stack } from "@mui/material"

interface HeroDetailsProps {
  data: FlightData,
  isLoading: boolean
}

const HeroDetails: React.FC<HeroDetailsProps> = ({ data, isLoading }) => {
  if(isLoading) return <p>Cargando ...</p>
  return (
    <HeroDetailsContainer>
      <HeroDetailsHeader data={data}/>
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
