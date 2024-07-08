import { Box, Stack } from "@mui/material"
import { FlightData } from "../../interfaces/flightData.interface"

interface HeroDetailsProps {
  data: FlightData[]
}

const HeroDetailsContent: React.FC<HeroDetailsProps> = ({ data }) => {
  return (
    <Stack
      id="content-details-container"
      flexDirection={"row"}
      justifyContent={"space-between"}
    >
      {data.map(({ departure, arrival }) => {
        function transformDate(date: string) {
          const newDate = new Date(date)
          const year = newDate.getUTCFullYear()
          const month = String(newDate.getUTCMonth() + 1).padStart(2, "0")
          const day = String(newDate.getUTCDate()).padStart(2, "0")
          const formattedDate = `${year}-${month}-${day}`

          const hours = String(newDate.getUTCHours()).padStart(2, "0")
          const minutes = String(newDate.getUTCMinutes()).padStart(2, "0")
          const seconds = String(newDate.getUTCSeconds()).padStart(2, "0")
          const formattedTime = `${hours}:${minutes}:${seconds}`

          return `${formattedDate} ${formattedTime}`
        }
        return (
          <>
            <Stack
              id="content-details-departure"
              alignItems={"center"}
              width={"100%"}
            >
              <p>Departure</p>
              <Stack>
                <p>{departure.airport}</p>
                <Stack flexDirection={"row"} justifyContent={"space-between"}>
                  <p>IATA: {departure.iata}</p>
                  <p>ICAO: {departure.icao}</p>
                </Stack>
              </Stack>
              <Stack
                flexDirection={"row"}
                textAlign={"center"}
                justifyContent={"center"}
                width={"100%"}
                gap={"24px"}
              >
                <Box textAlign={"center"}>
                  <p>Scheduled</p>
                  <p>{transformDate(departure.scheduled)}</p>
                </Box>
                <Box>
                  <p>Estimated</p>
                  <p>{transformDate(departure.estimated)}</p>
                </Box>
              </Stack>
              <Stack flexDirection={"row"} gap={"48px"}>
                <Stack flexDirection={"row"} gap={"12px"}>
                  <p>Terminal</p>
                  <p>{departure.terminal}</p>
                </Stack>

                <Stack flexDirection={"row"} gap={"12px"}>
                  <p>Gate</p>
                  <p>{departure.gate}</p>
                </Stack>
              </Stack>
            </Stack>

            <Stack
              id="content-details-arrival"
              alignItems={"center"}
              width={"100%"}
            >
              <p>Arrival</p>
              <Stack width={"100%"} textAlign={"center"}>
                <p>{arrival.airport}</p>
                <Stack
                  flexDirection={"row"}
                  justifyContent={"center"}
                  width={"100%"}
                  gap={"24px"}
                >
                  <p>IATA: {arrival.iata}</p>
                  <p>ICAO: {arrival.icao}</p>
                </Stack>
              </Stack>
              <Stack
                flexDirection={"row"}
                textAlign={"center"}
                justifyContent={"center"}
                width={"100%"}
                gap={"24px"}
              >
                <Box textAlign={"center"}>
                  <p>Scheduled</p>
                  <p>{transformDate(arrival.scheduled)}</p>
                </Box>
                <Box>
                  <p>Estimated</p>
                  <p>{transformDate(arrival.estimated)}</p>
                </Box>
              </Stack>
              <Stack flexDirection={"row"} gap={"48px"}>
                <Stack flexDirection={"row"} gap={"12px"}>
                  <p>Terminal</p>
                  <p>{arrival.terminal}</p>
                </Stack>

                <Stack flexDirection={"row"} gap={"12px"}>
                  <p>Gate</p>
                  <p>{arrival.gate}</p>
                </Stack>
              </Stack>
            </Stack>
          </>
        )
      })}
    </Stack>
  )
}

export default HeroDetailsContent
