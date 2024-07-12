import { Stack } from "@mui/material"
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

    return `${formattedDate} - ${formattedTime}`
  }
  return (
    <Stack className="card-container" gap={"6px"}>
      <p className="direction-title">{title}</p>
      <Stack className="airport-container">
        <p className="airport-name">{data.airport}</p>
        <Stack className="airport-code-container">
          <p>IATA: {data.iata}</p>
          <p>ICAO: {data.icao}</p>
        </Stack>
      </Stack>

      <Stack
        flexDirection={"row"}
        width={"100%"}
        justifyContent={"space-evenly"}
      >
        <Stack textAlign={"center"} gap={"6px"} width={"100%"}>
          <Stack className="date-container" borderRadius={"18px 0px 0px 18px"}>
            <p>Scheduled</p>
            <p>{transformDate(data.scheduled)}</p>
          </Stack>
          <Stack className="site-container">
            <p>Terminal</p>
            <p>{data.terminal}</p>
          </Stack>
        </Stack>
        <Stack textAlign={"center"} gap={"6px"} width={"100%"} >
          <Stack className="date-container" borderRadius={"0px 18px 18px 0px"}>
            <p>Estimated</p>
            <p>{transformDate(data.estimated)}</p>
          </Stack>
          <Stack className="site-container">
            <p>Gate</p>
            <p>{data.gate}</p>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default HeroDetailsContent
