import { FlightData } from "../../interfaces/flightData.interface"
import { Box, Stack, Button, Typography } from "@mui/material"
import FlightDetailCardContainer from "./FlightDetailCard.style"
import transformDate from "../../utils/transformDate"
import { IconPlane } from "../../common/Icons"

type FlightDetailCardProps = {
  data: FlightData
}

const FlightDetailCard: React.FC<FlightDetailCardProps> = ({ data }) => {
  return (
    <FlightDetailCardContainer>
      <Stack className="details-container">
        <Typography>{data.flight.iata}</Typography>
        <Typography>
          {data.airline.name} ({data.airline.iata})
        </Typography>
      </Stack>
      <Stack
        className="details-container"
        flexDirection={"row"}
        width={"100%"}
        justifyContent={"center"}
        gap={"24px"}
        alignItems={"center"}
      >
        <Stack className="details-arrival" textAlign={"center"} width={"100%"}>
          <Typography>{data.arrival.airport}</Typography>
          <Typography>{data.arrival.iata}</Typography>
          <Typography>{transformDate(data.arrival.scheduled)}</Typography>
        </Stack>
        <Stack width={"100px"} justifyContent={"center"} alignItems={"center"}>
          <IconPlane />
        </Stack>
        <Stack
          className="details-departure"
          textAlign={"center"}
          width={"100%"}
        >
          <Typography>{data.departure.airport}</Typography>
          <Typography>{data.departure.iata}</Typography>
          <Typography>{transformDate(data.departure.scheduled)}</Typography>
        </Stack>
      </Stack>
      <Stack className="details-container">
        <Box
          borderRadius={"100%"}
          width={"10px"}
          height={"10px"}
          sx={{ backgroundColor: "red" }}
        ></Box>
        <Box width={"150px"}>
          <Typography>{data.flight_status}</Typography>
        </Box>
      </Stack>
      <Button variant="contained" sx={{height:"100%", width:"200px"}}>More</Button>
    </FlightDetailCardContainer>
  )
}
export default FlightDetailCard
