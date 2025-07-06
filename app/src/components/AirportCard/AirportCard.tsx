import { Link, Stack, Typography } from "@mui/material"
import { AirportData } from "../../interfaces/airportData.interface"
import AirportCardContainer from "./AirportCard.style"
import { IconExternalLink } from "../../common/Icons"

type AirportCardProps = {
  airport: AirportData
}

const AirportCard: React.FC<AirportCardProps> = ({ airport }) => {
  const truncateNames = (name: string) => {
    const maxCharacters = 40
    if (name.length > maxCharacters) {
      return name.slice(0, maxCharacters) + "..."
    }
    return name
  }
  return (
    <AirportCardContainer
      sx={{
        width: { lg: "32%", xs: "100%" },
        height: { lg: "225px", xs: "225px" },
      }}
    >
      <Stack className="airport-title-container">
        <Typography className="airport-name">
          {truncateNames(airport.name)}
        </Typography>
        <Typography
          className="airport-code"
          width={"20%"}
          color={airport.iata_code ? "var(--neutral-50)" : "var(--neutral-600)"}
          sx={{
            backgroundColor: airport.iata_code
              ? "var(--neutral-800)"
              : "var(--neutral-200)",
          }}
        >
          {airport.iata_code || "---"}
        </Typography>
      </Stack>
      <Stack className="airport-details-container" width={"100%"}>
        <Stack className="airport-details">
          <Typography>LATITUDE</Typography>
          <Typography>{airport.lat}</Typography>
        </Stack>
        <Stack className="airport-details">
          <Typography>LONGITUDE</Typography>
          <Typography>{airport.lng}</Typography>
        </Stack>
      </Stack>
      <Link
        href={`https://www.google.com/maps?q=${airport.lat},${airport.lng}`}
        target="_blank"
        className="maps-button"
        underline="none"
      >
        <Typography>View on Google Maps</Typography>
        <IconExternalLink />
      </Link>
    </AirportCardContainer>
  )
}
export default AirportCard
