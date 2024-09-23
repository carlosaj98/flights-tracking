import FlightsPageContainer from "./FlightsPage.style"
import { Container } from "@mui/material"
import { useFlights } from "../../hooks/useFlight"
import { useState } from "react"
import { FieldValues } from "react-hook-form"
import SectionMain from "./sections/SectionMain"
import SectionFlights from "./sections/SectionFlights"

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
        <SectionMain
          setFormData={setFormData}
          setIsLoading={setIsLoading}
          setDirection={setDirection}
          flights={flights}
          formData={formData}
        />
        {flights.length ? (
          <SectionFlights
            setIsLoading={setIsLoading}
            setOffset={setOffset}
            flights={flights}
            offset={offset}
            pagination={pagination!}
          />
        ) : (
          <p>{isLoading && "Loading flights ..."}</p>
        )}
      </Container>
    </FlightsPageContainer>
  )
}
export default FlightsPage
