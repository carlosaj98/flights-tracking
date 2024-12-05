import { Stack, Typography } from "@mui/material"
import { AirportData } from "../../interfaces/airportData.interface"
import AirportCardContainer from "./AirportCard.style"

type AirportCardProps = {
  airport: AirportData
}

const AirportCard: React.FC<AirportCardProps> = ({ airport }) => {
  return (
    <AirportCardContainer sx={{
      width:{lg:"350px", sm:"45%", xs:"100%"},
      height:{lg:"225px", sm:"250px", xs:"225px"}
    }}>
      <Stack className="airport-title-container">
        <Typography className="airport-name">{airport.name}</Typography>
      </Stack>
      <Stack height={"100%"} justifyContent={"center"}>
        <Typography className="airport-code">
          {airport.iata_code || "---"}
        </Typography>
      </Stack>
      <Stack className="airport-coord-container" width={"100%"}>
        <Stack className="latitude-container">
          <Typography className="coord-title">Latitude</Typography>
          <Typography className="airport-coord">{airport.lat}</Typography>
        </Stack>
        <Stack className="longitude-container">
          <Typography className="coord-title">Longitude</Typography>
          <Typography className="airport-coord">{airport.lng}</Typography>
        </Stack>
      </Stack>
    </AirportCardContainer>
  )
}
export default AirportCard
