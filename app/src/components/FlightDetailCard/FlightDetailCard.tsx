import { FlightData } from "../../interfaces/flightData.interface"
import { Box, Stack, Typography } from "@mui/material"
import FlightDetailCardContainer from "./FlightDetailCard.style"
import transformDate from "../../utils/transformDate"
import { IconPlane } from "../../common/Icons"
import { ButtonDetails } from "../../common/Buttons"
// import { LinkDetailPage } from "../../common/Layouts"

type FlightDetailCardProps = {
  data: FlightData
}

function upperCaseStatus(status: string) {
  const result = status.charAt(0).toUpperCase() + status.slice(1)
  return result
}

const FlightDetailCard: React.FC<FlightDetailCardProps> = ({ data }) => {
  let statusColor = ""
  if (data.flight_status === "scheduled") statusColor = "#dc2626"
  if (data.flight_status === "landed") statusColor = "#f59e0b"
  if (data.flight_status === "active") statusColor = "#16a34a"
  return (
    <FlightDetailCardContainer
      height={{ lg: "200px", sm: "250px", xs: "100%" }}
      width={{ lg: "fit-content", xs: "100%" }}
      flexDirection={{ lg: "row", xs: "column" }}
    >
      <Stack
        width={"100%"}
        height={"100%"}
        flexDirection={{ sm: "row", xs: "column" }}
      >
        <Stack
          className="details-container"
          width={{ lg: "300px", sm: "500px", xs: "100%" }}
          borderRight={{ sm: "2px dashed var(--gray-semidark)", xs: "none" }}
          borderBottom={{ sm: "none", xs: "2px dashed var(--gray-semidark)" }}
          alignItems={{ sm: "flex-start", xs: "center" }}
        >
          <Typography className="flight-num">{data.flight.iata}</Typography>
          <Typography>
            {data.airline.name} ({data.airline.iata})
          </Typography>
          <Typography>{data.flight_date}</Typography>
          <Stack
            flexDirection={"row"}
            gap={"12px"}
            alignItems={"center"}
            flexGrow={"1"}
            className="status-container"
            paddingTop={{ sm: "0px", xs: "12px" }}
          >
            <Stack
              width={"20px"}
              height={"20px"}
              padding={"3px"}
              borderRadius={"100%"}
              border={"2px solid var(--gray-semilight)"}
              sx={{ backgroundColor: "white" }}
            >
              <Box
                width={"100%"}
                height={"100%"}
                borderRadius={"100%"}
                sx={{ backgroundColor: statusColor }}
              ></Box>
            </Stack>
            <Typography
              fontWeight={"500"}
              sx={{ textShadow: "0 0 2px white" }}
              color={statusColor}
            >
              {upperCaseStatus(data.flight_status!)}
            </Typography>
          </Stack>
        </Stack>
        <Stack
          className="details-container"
          width={{ lg: "500px", xs: "100%" }}
        >
          <Stack className="details-departure" textAlign={"center"}>
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
          <Stack width={"100%"} alignItems={"center"}>
            <IconPlane />
          </Stack>
          <Stack className="details-arrival" textAlign={"center"}>
            <Typography className="airports-code">
              {data.arrival.iata}
            </Typography>
            <Typography className="airports-name">
              {data.arrival.airport}
            </Typography>
            <Typography fontSize={"1.2rem"}>
              {transformDate(data.arrival.scheduled, "time")}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <ButtonDetails
        action={() => sessionStorage.setItem("flight", JSON.stringify(data))}
      />
    </FlightDetailCardContainer>
  )
}
export default FlightDetailCard
