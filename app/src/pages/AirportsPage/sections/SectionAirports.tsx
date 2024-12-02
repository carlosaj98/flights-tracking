import { Stack, Typography } from "@mui/material"
import AirportCard from "../../../components/AirportCard/AirportCard"
import { airports } from "../../../utils/airportsData.json"

const SectionAirports: React.FC = () => {
  return (
    <Stack
      alignItems={"center"}
      className="section-airports"
      gap={"24px"}
      marginTop={"32px"}
    >
      <Typography variant="h3">Airports</Typography>
      <Stack
        gap={{lg:"24px", xs:"16px"}}
        flexDirection={"row"}
        justifyContent={"center"}
        flexWrap={"wrap"}
      >
        {airports.slice(0, 10).map((airport) => {
          return <AirportCard key={airport.name} airport={airport} />
        })}
      </Stack>
    </Stack>
  )
}
export default SectionAirports
