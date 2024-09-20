import FlightsPageContainer from "./FlightsPage.style"
import { Box, Button, Container, Stack, Typography } from "@mui/material"
import formFields from "./configs/formFields"
import { useFlights } from "../../hooks/useFlight"
import ServicesForm from "../../components/ServicesForm/ServicesForm"
import ServicesGlobe from "../../components/ServicesGlobe/ServicesGlobe"
import { useState } from "react"
import { FieldValues } from "react-hook-form"
import FlightList from "../../utils/flightsAll.json"
import FlightDetailCard from "../../components/FlightDetailCard/FlightDetailCard"
import { IconArrow } from "../../common/Icons"

const FlightsPage: React.FC = () => {
  const [formData, setFormData] = useState<FieldValues>({})
  const [offset, setOffset] = useState<number>(0)
  const { flights, pagination, setIsLoading, setDirection, isLoading } =
    useFlights(formData, {
      access_key: import.meta.env.VITE_API_KEY,
      [formData.direction]: formData.airportCode,
      airline_name: formData.airline,
      limit: formData.limit,
      offset: offset,
    })

  console.log(offset)
  return (
    <FlightsPageContainer>
      <Container sx={{ height: "100%" }}>
        <Stack component={"section"} id="section-main">
          <Stack alignItems={"center"} gap={"12px"} textAlign={"center"}>
            <Typography variant="h1">
              Find various <span>Flights</span>
            </Typography>
            <Typography variant="h2">
              Discover and Compare a wide selection of Flights
            </Typography>
          </Stack>
          <Stack
            marginTop={"32px"}
            flexDirection={{ lg: "row", xs: "column" }}
            alignItems={"center"}
            gap={"32px"}
          >
            <ServicesForm
              formFields={formFields}
              actionForm={setFormData}
              actionLoading={setIsLoading}
              actionDirection={setDirection}
            />
            <ServicesGlobe
              flights={flights}
              flightsDirection={formData.direction}
              airportCode={formData.airportCode}
            />
          </Stack>
        </Stack>
        {FlightList.data.length ? (
          <Stack
            component={"section"}
            className="section-flights"
            gap={"24px"}
            marginTop={"32px"}
          >
            <Stack
              borderTop={"2px solid var(--gray-base)"}
              padding={"24px"}
              alignItems={"center"}
            >
              <Typography variant="h3">Flights</Typography>
            </Stack>
            <Stack
              id="flights-list-container"
              gap={"32px"}
              alignItems={"center"}
            >
              <Stack alignItems={"center"} width={"100%"} gap={"12px"}>
                <Typography>
                  Found flights: <span>{FlightList.pagination!.total}</span>
                </Typography>
                <Stack
                  gap={"24px"}
                  flexDirection={"row"}
                  width={"100%"}
                  justifyContent={"space-between"}
                >
                  <Button
                    className="btn-pages"
                    variant="contained"
                    disabled={offset === 0}
                    sx={{ width: "200px" }}
                    onClick={() => {
                      setOffset(offset + FlightList.pagination!.limit),
                        setIsLoading(true)
                    }}
                  >
                    <Box height={"20px"}>
                      <IconArrow direction="left" />
                    </Box>
                    PREVIOUS PAGE
                  </Button>
                  <Typography>
                    Page: {offset / FlightList.pagination!.limit} /{" "}
                    {Math.round(
                      FlightList.pagination!.total /
                        FlightList.pagination!.limit
                    )}
                  </Typography>
                  <Button
                    className="btn-pages"
                    variant="contained"
                    disabled={offset >= FlightList.pagination!.total}
                    sx={{ width: "200px" }}
                    onClick={() => {
                      setOffset(offset + FlightList.pagination!.limit),
                        setIsLoading(true)
                    }}
                  >
                    NEXT PAGE
                    <Box height={"20px"}>
                      <IconArrow direction="right" />
                    </Box>
                  </Button>
                </Stack>
              </Stack>
              {FlightList.data.map((flightData) => {
                return (
                  <FlightDetailCard
                    key={flightData.flight.iata + flightData.flight_date}
                    data={flightData}
                  />
                )
              })}
            </Stack>
          </Stack>
        ) : (
          <p>{isLoading && "Loading flights ..."}</p>
        )}
      </Container>
    </FlightsPageContainer>
  )
}
export default FlightsPage
