import FlightsPageContainer from "./FlightsPage.style"
import { Container, Stack, Typography } from "@mui/material"
import formFields from "./configs/formFields"
import { useFlights } from "../../hooks/useFlight"
import ServicesForm from "../../components/ServicesForm/ServicesForm"
import ServicesGlobe from "../../components/ServicesGlobe/ServicesGlobe"
import { useState } from "react"
import { FieldValues } from "react-hook-form"

const FlightsPage: React.FC = () => {
  const [formData, setFormData] = useState<FieldValues>({})
  const { flights, setIsLoading, setDirection } = useFlights(formData, {
    access_key: import.meta.env.VITE_API_KEY,
    [formData.direction]: formData.airportCode,
    airline_name: formData.airline,
    limit: 50,
  })

  return (
    <FlightsPageContainer>
      <Container sx={{ height: "100%" }}>
        <Stack alignItems={"center"}>
          <Typography variant="h1">
            Find various <span>flights</span>
          </Typography>
        </Stack>
        <Stack
          marginTop={"64px"}
          flexDirection={"row"}
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
      </Container>
    </FlightsPageContainer>
  )
}
export default FlightsPage
