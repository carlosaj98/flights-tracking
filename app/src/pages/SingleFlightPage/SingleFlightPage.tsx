import { useState } from "react"
import { FieldValues } from "react-hook-form"
import { useFlight } from "../../hooks/useFlight"
import SectionMain from "./sections/SectionMain"
import SingleFlightPageContainer from "./SingleFlightPage.style"
import { Container } from "@mui/material"

const SingleFlightPage: React.FC = () => {
  const [formData, setFormData] = useState<FieldValues>({})
  const { flight, setIsLoading, setDirection } =
    useFlight(formData, {
      access_key: import.meta.env.VITE_API_KEY,
      airline_name: formData.airline,
      flight_iata: formData.flight,
    })
    console.log(flight)
  return (
    <SingleFlightPageContainer>
      <Container sx={{ height: "100%" }}>
        <SectionMain
          setFormData={setFormData}
          setIsLoading={setIsLoading}
          setDirection={setDirection}
          flights={flight}
          formData={formData}
        />
      </Container>
    </SingleFlightPageContainer>
  )
}
export default SingleFlightPage
