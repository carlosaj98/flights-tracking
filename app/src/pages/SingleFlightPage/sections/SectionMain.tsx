import ServicesForm from "../../../components/ServicesForm/ServicesForm"
import { Stack, Typography } from "@mui/material"
import formFields from "../configs/formFields"
import { FieldValues } from "react-hook-form"
import ServicesGlobe from "../../../components/ServicesGlobe/ServicesGlobe"
import { FlightData } from "../../../interfaces/flightData.interface"
import FlightDetails from "../../../components/FlightDetails/FlightDetails"
import Loader from "../../../components/Loader/Loader"

type SectionMainProps = {
  formData: FieldValues
  flights: FlightData[]
  setFormData: React.Dispatch<React.SetStateAction<FieldValues>>
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  setDirection: React.Dispatch<React.SetStateAction<"arrival" | "departure">>
  isLoading: boolean
}

const SectionMain: React.FC<SectionMainProps> = ({
  setFormData,
  setIsLoading,
  setDirection,
  flights,
  formData,
  isLoading,
}) => {
  const flightStorage = sessionStorage.getItem("flight")
  console.log(flightStorage)
  return (
    <Stack gap={"32px"}>
      <Stack alignItems={"center"}>
        <Typography variant="h1">
          Find one <span>Flight</span>
        </Typography>
        <Typography variant="h2">
          In-Depth Information of Your Selected Flight
        </Typography>
      </Stack>
      <Stack flexDirection={"row"} alignItems={"center"}>
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
          type={"single"}
        />
      </Stack>
      {flightStorage && !flights.length && (
        <FlightDetails data={JSON.parse(flightStorage)} />
      )}
      {!isLoading && flights.length ? (
        <FlightDetails data={flights[0]} />
      ) : (
        <Loader status={isLoading} />
      )}
    </Stack>
  )
}
export default SectionMain
