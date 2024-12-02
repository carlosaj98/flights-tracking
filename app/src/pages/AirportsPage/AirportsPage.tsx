import { useState } from "react"
import AirportsPageContainer from "./AirportsPage.style"
import SectionMain from "./sections/SectionMain"
import SectionAirports from "./sections/SectionAirports"
import { FieldValues } from "react-hook-form"
import useAirports from "../../hooks/useAirports"
import { Container } from "@mui/material"
import Loader from "../../components/Loader/Loader"

const AirportsPage: React.FC = () => {
  const [formData, setFormData] = useState<FieldValues>({})
  const { airports, isLoading, setIsLoading } = useAirports(formData, {
    api_key: import.meta.env.VITE_API_AIRPORTS_KEY,
    country_code: formData.countries,
    iata_code: formData.airportCode,
  })
  return (
    <AirportsPageContainer>
      <Container sx={{ height: "100%" }}>
        <SectionMain
          setFormData={setFormData}
          setIsLoading={setIsLoading}
          airports={airports}
          formData={formData}
          isLoading={isLoading}
        />
        {!isLoading && airports.length ? (
          <SectionAirports airports={airports} isLoading={isLoading} />
        ) : (
          <Loader status={isLoading} text="Airports"/>
        )}
      </Container>
    </AirportsPageContainer>
  )
}
export default AirportsPage
