import ServicesForm from "../../../components/ServicesForm/ServicesForm"
import { Stack, Typography } from "@mui/material"
import { formFields, validationSchema } from "../configs/formFields"
import { FieldValues } from "react-hook-form"
import ServiceFlightGlobe from "../../../components/ServicesGlobe/ServiceFlightGlobe"
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
  return (
    <Stack gap={"32px"}>
      <Stack alignItems={"center"} gap={"12px"}>
        <Typography variant="h1">
          Find one <span>Flight</span>
        </Typography>
        <Typography variant="h2" textAlign={"center"}>
          In-Depth Information of Your Selected Flight
        </Typography>
      </Stack>
      <Stack flexDirection={{ lg: "row", xs: "column" }} alignItems={"center"}>
        <ServicesForm
          formFields={formFields}
          actionForm={setFormData}
          actionLoading={setIsLoading}
          actionDirection={setDirection}
          validation={validationSchema}
          textButton="SEARCH FLIGHT"
        />
        <Stack id="canvas-container">
          <ServiceFlightGlobe
            flights={flights}
            flightsDirection={formData.direction}
            airportCode={formData.airportCode}
            type={"single"}
          />
        </Stack>
      </Stack>
      {!isLoading && flights.length ? (
        <FlightDetails data={flights[0]} />
      ) : (
        <Loader status={isLoading} text="Flight" />
      )}
    </Stack>
  )
}
export default SectionMain
