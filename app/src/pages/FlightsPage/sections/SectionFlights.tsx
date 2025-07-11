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
      <Stack borderTop={"2px solid var(--neutral-200)"} paddingTop={"24px"}>
        <Typography variant="h3" alignSelf={"flex-start"}>
          Flight Results
        </Typography>
      </Stack>
      <Stack id="flights-list-container" gap={"32px"}>
        <Typography id="flights-count">
          Found <span>{pagination!.total}</span> flights
        </Typography>
        <Stack
          flexDirection={"row"}
          justifyContent={"space-between"}
          width={"100%"}
          flexWrap={"wrap"}
          gap={"12px"}
        >
          {flights.map((flightData) => {
            return (
              <FlightDetailCard
                key={flightData.flight.iata! + flightData.flight_date!}
                data={flightData}
              />
            )
          })}
        </Stack>
        <Stack
          gap={"24px"}
          flexDirection={"row"}
          width={"100%"}
          justifyContent={{ md: "center", xs: "space-between" }}
          alignItems={"center"}
        >
          <Button
            className="btn-pages"
            variant="contained"
            disableElevation
            sx={{ width: { md: "120px", xs: "100px" } }}
            disabled={offset === 0}
            onClick={() => {
              setOffset(offset - pagination!.limit), setIsLoading(true)
            }}
          >
            <Box height={"20px"}>
              <IconArrow direction="left" />
            </Box>
            Previous
          </Button>
          <Typography id="pagination">
            {`Page ${offset / pagination!.limit} of ${Math.round(
              pagination!.total / pagination!.limit
            )}
            `}
          </Typography>

          <Button
            className="btn-pages"
            variant="contained"
            sx={{ width: { md: "120px", xs: "100px" } }}
            disableElevation
            disabled={offset >= pagination!.total}
            onClick={() => {
              setOffset(offset + pagination!.limit), setIsLoading(true)
            }}
          >
            Next
            <IconArrow direction="right" />
          </Button>
        </Stack>
      </Stack>
    </Stack>
  )
}
export default SectionFlights
