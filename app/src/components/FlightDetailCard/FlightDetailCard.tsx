import { FlightData } from "../../interfaces/flightData.interface"
import { Box, Stack, Button, Typography } from "@mui/material"
import FlightDetailCardContainer from "./FlightDetailCard.style"
import transformDate from "../../utils/transformDate"
import { IconPlane } from "../../common/Icons"

type FlightDetailCardProps = {
  data: FlightData
}

function upperCaseStatus(status: string) {
  const result = status.charAt(0).toUpperCase() + status.slice(1)
  return result
}

const FlightDetailCard: React.FC<FlightDetailCardProps> = ({ data }) => {
  let statusColor = ""
  if(data.flight_status === "scheduled") statusColor = "red"
  if(data.flight_status === "landed") statusColor = "orange"
  if(data.flight_status === "active") statusColor = "green"
  return (
    <FlightDetailCardContainer>
      <Stack className="details-container">
        <Typography className="flight-num">{data.flight.iata}</Typography>
        <Typography>
          {data.airline.name} ({data.airline.iata})
        </Typography>
        <Typography>{data.flight_date}</Typography>
      </Stack>
      <Stack className="details-container">
        <Stack className="details-arrival">
          <Typography className="airports-code">{data.arrival.iata}</Typography>
          <Typography className="airports-name">
            {data.arrival.airport}
          </Typography>
          <Typography fontSize={"1.2rem"}>
            {transformDate(data.arrival.scheduled, "time")}
          </Typography>
        </Stack>
        <Stack>
          <IconPlane />
        </Stack>
        <Stack className="details-departure">
          <Typography className="airports-code">
            {data.departure.iata}
          </Typography>
          <Typography className="airports-name">
            {data.departure.airport}
          </Typography>
          <Typography fontSize={"1.2rem"}>
            {transformDate(data.departure.scheduled, "time")}
          </Typography>
        </Stack>
      </Stack>
      <Stack className="details-container">
        <Box
          borderRadius={"100%"}
          width={"10px"}
          height={"10px"}
          sx={{ backgroundColor: statusColor }}
        ></Box>
        <Typography fontWeight={"500"}>{upperCaseStatus(data.flight_status)}</Typography>
      </Stack>
      <Stack width={"300px"} height="100%">
        <Button variant="contained" sx={{ height: "100%", width: "100%" }}>
          More
        </Button>
      </Stack>
    </FlightDetailCardContainer>
  )
}
export default FlightDetailCard
