import { useEffect, useState } from "react"
import { FieldValues } from "react-hook-form"
import { useFlight } from "../../hooks/useFlight"
import SectionMain from "./sections/SectionMain"
import SingleFlightPageContainer from "./SingleFlightPage.style"
import { Container } from "@mui/material"
import { BackButton } from "../../common/Buttons"
import flightTransform from "../../utils/flightTransform"
// import { exampleFlight } from "./configs/exampleFlight"

const SingleFlightPage: React.FC = () => {
  const [formData, setFormData] = useState<FieldValues>({})
  const { flight, setIsLoading, setDirection, isLoading } = useFlight(
    formData,
    {
      access_key: import.meta.env.VITE_API_KEY,
      airline_name: formData.airline,
      flight_iata: formData.flight,
    }
  )
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const getFlightStorage = sessionStorage.getItem("flight")
  const parsedFlight = () => {
    if (getFlightStorage) {
      return flightTransform([JSON.parse(getFlightStorage)])
    }
    return flight
  }

  const flightStorage = parsedFlight()

  return (
    <SingleFlightPageContainer>
      <Container sx={{ height: "100%" }}>
        <BackButton />
        <SectionMain
          setFormData={setFormData}
          setIsLoading={setIsLoading}
          setDirection={setDirection}
          flights={flightStorage || flight}
          // flights={flightTransform(exampleFlight) || exampleFlight}
          formData={formData}
          isLoading={isLoading}
        />
      </Container>
    </SingleFlightPageContainer>
  )
}
export default SingleFlightPage
