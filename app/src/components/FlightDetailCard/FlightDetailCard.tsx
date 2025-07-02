import { FlightData } from "../../interfaces/flightData.interface"
import { Box, Stack, Typography } from "@mui/material"
import FlightDetailCardContainer from "./FlightDetailCard.style"
import transformDate from "../../utils/transformDate"
import { IconPlaneOutline } from "../../common/Icons"
import { ButtonDetails } from "../../common/Buttons"
// import { LinkDetailPage } from "../../common/Layouts"

type FlightDetailCardProps = {
  data: FlightData
}

type FlightStatus = "scheduled" | "landed" | "active"

function upperCaseStatus(status: string) {
  const result = status.charAt(0).toUpperCase() + status.slice(1)
  return result
}

function setFlightStatusColor(status: string | null) {
  const flightStatusColors: Record<FlightStatus, { bg: string; text: string }> =
    {
      scheduled: { bg: "var(--neutral-200)", text: "var(--neutral-800)" },
      landed: { bg: "var(--orange-100)", text: "var(--orange-800)" },
      active: { bg: "#dcfce7", text: "#067530" },
    }

  const restStatusColor = { bg: "#ffe2e2", text: "#9f0712" }

  if (status === "scheduled" || status === "landed" || status === "active") {
    return flightStatusColors[status as FlightStatus]
  } else {
    return restStatusColor
  }
}

const FlightDetailCard: React.FC<FlightDetailCardProps> = ({ data }) => {
  return (
    <FlightDetailCardContainer sx={{ width: { md: "49%", xs: "100%" } }}>
      <Stack className="card-header-info">
        <Stack className="flight-header-details">
          <Typography>{data.flight.iata}</Typography>
          <Typography>{`${data.airline.name} (${data.airline.iata})`}</Typography>
          <Typography>{transformDate(data.flight_date!, "date")}</Typography>
        </Stack>
        <Typography
          className="flight-status"
          bgcolor={setFlightStatusColor(data.flight_status).bg}
          color={setFlightStatusColor(data.flight_status).text}
        >
          {upperCaseStatus(data.flight_status!)}
        </Typography>
      </Stack>
      <Stack className="card-body-info">
        <Stack textAlign={"left"} className="location-container">
          <Typography className="airports-iata">
            {data.departure.iata}
          </Typography>
          <Stack className="location-details">
            <Typography>{data.departure.airport}</Typography>
            <Typography>
              {transformDate(data.departure.scheduled, "time")}
            </Typography>
          </Stack>
        </Stack>
        <Stack alignItems={"center"} flexDirection={"row"} gap={"6px"}>
          <Box width={"25px"} border={"1px dashed var(--neutral-300)"}></Box>
          <IconPlaneOutline />
          <Box width={"25px"} border={"1px dashed var(--neutral-300)"}></Box>
        </Stack>
        <Stack textAlign={"right"} className="location-container">
          <Typography className="airports-iata">{data.arrival.iata}</Typography>
          <Stack className="location-details">
            <Typography>{data.arrival.airport}</Typography>
            <Typography>
              {transformDate(data.arrival.scheduled, "time")}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <ButtonDetails action={() => sessionStorage.setItem("flight", JSON.stringify(data))}/>
    </FlightDetailCardContainer>
  )
}
export default FlightDetailCard
