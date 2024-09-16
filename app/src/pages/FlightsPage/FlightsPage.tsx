import FlightsPageContainer from "./FlightsPage.style"
import { Container, Stack, Typography } from "@mui/material"
import formFields from "./configs/formFields"
import { useFlights } from "../../hooks/useFlight"
import ServicesForm from "../../components/ServicesForm/ServicesForm"
import HeroGlobe from "../../components/HeroGlobe/HeroGlobe"
import { useState, useEffect } from "react"
import { FieldValues } from "react-hook-form"

const FlightsPage: React.FC = () => {
  const [formData, setFormData] = useState<FieldValues>({})
  const { flights, isLoading, setIsLoading, setDirection } = useFlights(formData, {
    access_key: import.meta.env.VITE_API_KEY,
    [formData.direction]: formData.airportCode,
    airline_name: formData.airline,
  })

  return (
    <FlightsPageContainer>
      <Container sx={{ height: "100%" }}>
        <Stack alignItems={"center"}>
          <Typography variant="h1">
            Find various <span>flights</span>
          </Typography>
        </Stack>
        <Stack marginTop={"64px"} flexDirection={"row"} alignItems={"center"}>
          <ServicesForm
            formFields={formFields}
            actionForm={setFormData}
            actionLoading={setIsLoading}
            actionDirection={setDirection}
          />
          <HeroGlobe />
        </Stack>
      </Container>
    </FlightsPageContainer>
  )
}
export default FlightsPage
