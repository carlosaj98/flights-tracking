import { Stack, Typography, Button, Box } from "@mui/material"
import { IconArrow } from "../../../common/Icons"
import FlightDetailCard from "../../../components/FlightDetailCard/FlightDetailCard"
import {
  FlightData,
  Pagination,
} from "../../../interfaces/flightData.interface"

type SectionFlightsProps = {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  offset: number
  flights: FlightData[]
  setOffset: React.Dispatch<React.SetStateAction<number>>
  pagination: Pagination
}

const SectionFlights: React.FC<SectionFlightsProps> = ({
  pagination,
  setOffset,
  setIsLoading,
  offset,
  flights,
}) => {
  return (
    <Stack
      component={"section"}
      className="section-flights"
      gap={"12px"}
      marginTop={"32px"}
    >
      <Stack
        borderTop={"2px solid var(--gray-base)"}
        padding={"24px"}
        alignItems={"center"}
      >
        <Typography variant="h3">Flights</Typography>
      </Stack>
      <Stack id="flights-list-container" gap={"32px"} alignItems={"center"}>
        <Stack alignItems={"center"} width={"100%"} gap={"12px"}>
          <Typography id="flights-count">
            Found flights: <span>{pagination!.total}</span>
          </Typography>
          <Stack
            gap={"48px"}
            flexDirection={"row"}
            width={"100%"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Button
              className="btn-pages"
              variant="contained"
              disabled={offset === 0}
              sx={{ width: {sm:"100px", xs:"75px" }}}
              onClick={() => {
                setOffset(offset - pagination!.limit), setIsLoading(true)
              }}
            >
              <Box height={"20px"}>
                <IconArrow direction="left" />
              </Box>
            </Button>
              <Typography id="pagination">
                Page: {offset / pagination!.limit} /{" "}
                {Math.round(pagination!.total / pagination!.limit)}
              </Typography>


            <Button
              className="btn-pages"
              variant="contained"
              disabled={offset >= pagination!.total}
              sx={{ width: {sm:"100px", xs:"75px" }}}
              onClick={() => {
                setOffset(offset + pagination!.limit), setIsLoading(true)
              }}
            >
              <Box height={"20px"}>
                <IconArrow direction="right" />
              </Box>
            </Button>
          </Stack>
        </Stack>
        {flights.map((flightData) => {
          return (
            <FlightDetailCard
              key={flightData.flight.iata! + flightData.flight_date!}
              data={flightData}
            />
          )
        })}
      </Stack>
    </Stack>
  )
}
export default SectionFlights
