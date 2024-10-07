import FlightDetailsContainer from "./FlightDetails.style"
import { FlightData } from "../../interfaces/flightData.interface"
import FlightDetailsHeader from "./FlightDetailsHeader"
import FlightDetailsContent from "./FlightDetailsContent"
import { Stack } from "@mui/material"

interface FlightDetailsProps {
  data: FlightData,
}

const FlightDetails: React.FC<FlightDetailsProps> = ({ data }) => {
  return (
    <FlightDetailsContainer>
      <FlightDetailsHeader data={data}/>
      <Stack
        className="content-details-container"
        flexDirection={{ lg: "row", xs: "column" }}
      >
        <FlightDetailsContent data={data.departure} title={"Departure"} />
        <FlightDetailsContent data={data.arrival} title={"Arrival"} />
      </Stack>
    </FlightDetailsContainer>
  )
}

export default FlightDetails
