import { Stack, Typography } from "@mui/material"
import { AirportData } from "../../interfaces/airportData.interface"
import AirportCardContainer from "./AirportCard.style"

type AirportCardProps = {
  airport: AirportData
}

const AirportCard: React.FC<AirportCardProps> = ({ airport }) => {
  return (
    <AirportCardContainer>
      <Stack className="airport-title-container">
        <Typography className="airport-name">{airport.name}</Typography>
      </Stack>
      <Stack height={"100%"} justifyContent={"center"}>
        <Typography className="airport-code">
          {airport.iata_code || "N/A"}
        </Typography>
      </Stack>
      <Stack className="airport-coord-container">
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
