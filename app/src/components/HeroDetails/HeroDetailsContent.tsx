import { Stack, useMediaQuery, Typography } from "@mui/material"
import { Direction } from "../../interfaces/flightData.interface"

interface HeroDetailsProps {
  data: Direction
  title: string
}

const HeroDetailsContent: React.FC<HeroDetailsProps> = ({ data, title }) => {
  const isMobileScreen: boolean = useMediaQuery("(max-width:600px)")

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
    <Stack
      className="card-container"
      gap={"6px"}
      padding={{ sm: "24px 48px", xs: "24px 12px" }}
    >
      <Typography className="direction-title">{title}</Typography>
      <Stack className="airport-container">
        <Typography className="airport-name">{data.airport}</Typography>
        <Stack className="airport-code-container">
          <Typography>IATA: {data.iata}</Typography>
          <Typography>ICAO: {data.icao}</Typography>
        </Stack>
      </Stack>

      <Stack
        flexDirection={{ sm: "row", xs: "column" }}
        width={"100%"}
        gap={{ sm: "0px", xs: "12px" }}
      >
        {!isMobileScreen ? (
          <>
            <Stack textAlign={"center"} gap={"12px"} width={"100%"}>
              <Stack
                className="date-container"
                borderRadius={"18px 0px 0px 18px"}
              >
                <Typography >Scheduled</Typography>
                <Typography>{transformDate(data.scheduled)}</Typography>
              </Stack>
              <Stack className="site-container">
                <Typography>Terminal</Typography>
                <Typography>{data.terminal}</Typography>
              </Stack>
            </Stack>
            <Stack textAlign={"center"} gap={"12px"} width={"100%"}>
              <Stack
                className="date-container"
                borderRadius={"0px 18px 18px 0px"}
              >
                <Typography>Estimated</Typography>
                <Typography>{transformDate(data.estimated)}</Typography>
              </Stack>
              <Stack className="site-container">
                <Typography>Gate</Typography>
                <Typography>{data.gate}</Typography>
              </Stack>
            </Stack>
          </>
        ) : (
          <>
            <Stack textAlign={"center"} gap={"12px"} width={"100%"}>
              <Stack className="date-container" borderRadius={"18px"}>
                <Typography>Scheduled</Typography>
                <Typography fontSize={"0.85rem"}>{transformDate(data.scheduled)}</Typography>
              </Stack>
              <Stack className="date-container" borderRadius={"18px"}>
                <Typography>Estimated</Typography>
                <Typography fontSize={"0.85rem"}>{transformDate(data.estimated)}</Typography>
              </Stack>
            </Stack>
            <Stack
              textAlign={"center"}
              gap={"12px"}
              width={"100%"}
              flexDirection={"row"}
              justifyContent={"center"}
            >
              <Stack className="site-container">
                <Typography fontSize={"0.85rem"}>Terminal</Typography>
                <Typography fontSize={"0.85rem"}>{data.terminal}</Typography>
              </Stack>
              <Stack className="site-container">
                <Typography fontSize={"0.85rem"}>Gate</Typography>
                <Typography fontSize={"0.85rem"}>{data.gate}</Typography>
              </Stack>
            </Stack>
          </>
        )}
      </Stack>
    </Stack>
  )
}

export default HeroDetailsContent
