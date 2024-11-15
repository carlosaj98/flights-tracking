import { useState } from "react"
import AirportsPageContainer from "./AirportsPage.style"
import SectionMain from "./sections/SectionMain"
import { FieldValues } from "react-hook-form"
import useAirports from "../../hooks/useAirports"

const AirportsPage: React.FC = () => {
  const [formData, setFormData] = useState<FieldValues>({})
  const { airports, setAirports, isLoading, setIsLoading } = useAirports(
    formData,
    {
      api_key: import.meta.env.VITE_API_AIRPORTS_KEY,
      country_code: formData.countries,
    }
  )
  return (
    <AirportsPageContainer sx={{ alignItems: "center" }}>
      <SectionMain
        setFormData={setFormData}
        setIsLoading={setIsLoading}
        airports={airports}
        formData={formData}
        isLoading={isLoading}
      />
    </AirportsPageContainer>
  )
}
export default AirportsPage
