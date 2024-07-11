import { Box, Stack } from "@mui/material"
import { Direction } from "../../interfaces/flightData.interface"

interface HeroDetailsProps {
  data: Direction
  title: string
}

const HeroDetailsContent: React.FC<HeroDetailsProps> = ({ data, title }) => {
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
    <Stack
      id="content-details-container"
      flexDirection={"row"}
      justifyContent={"space-between"}
      width={"100%"}
    >
      <Stack className="card-container" alignItems={"center"} width={"100%"}>
        <p className="direction-title">{title}</p>
        <Stack className="card-airport-container">
          <p>{data.airport}</p>
          <Stack flexDirection={"row"} justifyContent={"space-between"}>
            <p>IATA: {data.iata}</p>
            <p>ICAO: {data.icao}</p>
          </Stack>
        </Stack>
        <Stack
          flexDirection={"row"}
          textAlign={"center"}
          justifyContent={"center"}
          width={"100%"}
          gap={"24px"}
          className="card-dates-container"
        >
          <Box textAlign={"center"}>
            <p>Scheduled</p>
            <p>{transformDate(data.scheduled)}</p>
          </Box>
          <Box>
            <p>Estimated</p>
            <p>{transformDate(data.estimated)}</p>
          </Box>
        </Stack>
        <Stack
          flexDirection={"row"}
          gap={"48px"}
          className="card-place-container"
        >
          <Stack flexDirection={"row"} gap={"12px"}>
            <p>Terminal</p>
            <p>{data.terminal}</p>
          </Stack>

          <Stack flexDirection={"row"} gap={"12px"}>
            <p>Gate</p>
            <p>{data.gate}</p>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default HeroDetailsContent
