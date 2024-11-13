import { Stack, Typography } from "@mui/material"
import ServicesForm from "../../../components/ServicesForm/ServicesForm"
import ServicesGlobe from "../../../components/ServicesGlobe/ServicesGlobe"
import {formFields, validationSchema} from "../configs/formFields"
import { FieldValues } from "react-hook-form"
import { FlightData } from "../../../interfaces/flightData.interface"

type SectionMainProps = {
  formData: FieldValues
  flights: FlightData[]
  setFormData: React.Dispatch<React.SetStateAction<FieldValues>>
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  setDirection: React.Dispatch<React.SetStateAction<"arrival" | "departure">>
}

const SectionMain: React.FC<SectionMainProps> = ({
  setFormData,
  setIsLoading,
  setDirection,
  flights,
  formData,
}) => {
  return (
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
          validation={validationSchema}
        />
        <ServicesGlobe
          flights={flights}
          flightsDirection={formData.direction}
          airportCode={formData.airportCode}
          type="multiple"
        />
      </Stack>
    </Stack>
  )
}
export default SectionMain
