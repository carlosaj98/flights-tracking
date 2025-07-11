import { Box, Stack, Typography } from "@mui/material"
import { IconPlane } from "../../common/Icons"
import { FlightData } from "../../interfaces/flightData.interface"

interface FlightDetailsProps {
  data: FlightData
}

const FlightDetailsHeader: React.FC<FlightDetailsProps> = ({ data }) => {
  let flightStatusColor = ""

  switch (data.flight_status) {
    case "active":
      flightStatusColor = "#00a63e"
      break
    case "landed":
      flightStatusColor = "var(--orange-500)"
      break
    case "cancelled":
    case "incident":
    case "diverted":
      flightStatusColor = "red"
      break
    default:
      flightStatusColor = "var(--neutral-400)"
  }
  const truncateNames = (name: string) => {
    if (name === null) return "---"
    const maxCharacters = 40
    if (name.length > maxCharacters) {
      return name.slice(0, maxCharacters) + "..."
    }
    return name
  }
  return (
    <Stack
      flexDirection={{ sm: "row", xs: "column" }}
      justifyContent={"space-between"}
      alignItems={"center"}
      textAlign={"center"}
      gap={{ sm: "0px", xs: "12px" }}
      id="header-details-container"
    >
      <Stack
        className="header-details-item"
        alignItems={{ sm: "flex-start", xs: "center" }}
      >
        <Typography
          className="header-text-title"
          fontSize={{ md: "1.25rem", xs: "1.1rem" }}
        >
          {data.flight.iata || "---"}
        </Typography>
        {data.airline.name && data.airline.iata ? (
          <Typography
            className="header-text-subtitle"
            fontSize={{ md: "1rem", xs: "0.85rem" }}
          >
            {data.airline.name} ({data.airline.iata})
          </Typography>
        ) : (
          <Typography className="header-text-subtitle">{"---"}</Typography>
        )}
      </Stack>
      <Stack
        className="header-details-item"
        flexDirection={{ sm: "row", xs: "column" }}
        gap={{ sm: "0px", xs: "12px" }}
        borderTop={{ sm: "none", xs: "2px solid var(--primary-color-dark)" }}
        borderBottom={{ sm: "none", xs: "2px solid var(--primary-color-dark)" }}
        padding={{ sm: "0px", xs: "12px 0px" }}
        alignItems={"center"}
      >
        <Stack width={"100%"}>
          <Typography
            className="header-text-title"
            fontSize={{ md: "1.25rem", xs: "1.1rem" }}
          >
            {data.departure.iata || "---"}
          </Typography>
          <Typography className="header-text-subtitle" fontSize={"14px"}>
            {truncateNames(data.departure.airport || "---")}
          </Typography>
        </Stack>
        <Stack
          width={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ rotate: { sm: "0deg", xs: "90deg" } }}
        >
          <IconPlane />
        </Stack>
        <Stack width={"100%"}>
          <Typography
            className="header-text-title"
            fontSize={{ md: "1.25rem", xs: "1.1rem" }}
          >
            {data.arrival.iata || "---"}
          </Typography>
          <Typography className="header-text-subtitle" fontSize={"14px"}>
            {truncateNames(data.arrival.airport || "---")}
          </Typography>
        </Stack>
      </Stack>

      <Stack
        className="header-details-item"
        alignItems={"center"}
        alignSelf={"center"}
        flexDirection={"row"}
        justifyContent={{ sm: "flex-end", xs: "center" }}
        gap={"6px"}
      >
        <Box
          width={"15px"}
          height={"15px"}
          bgcolor={flightStatusColor}
          borderRadius={"50%"}
          border={"2px solid var(--neutral-50)"}
        ></Box>
        <Typography
          className="header-text-title"
          fontSize={{ md: "1.25rem", xs: "1.1rem" }}
        >
          {data.flight_status!.charAt(0).toUpperCase() +
            data.flight_status!.slice(1)}
        </Typography>
      </Stack>
    </Stack>
  )
}

export default FlightDetailsHeader
