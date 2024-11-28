import { Stack, Typography } from "@mui/material"
import ServicesForm from "../../../components/ServicesForm/ServicesForm"
import { formFields, validationSchema } from "../configs/formFields"
import { AirportData } from "../../../interfaces/airportData.interface"
import { FieldValues } from "react-hook-form"
import ServiceAirportGlobe from "../../../components/ServicesGlobe/ServiceAirportGlobe"

type SectionMainProps = {
  formData: FieldValues
  airports: AirportData[]
  setFormData: React.Dispatch<React.SetStateAction<FieldValues>>
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  isLoading: boolean
}

const SectionMain: React.FC<SectionMainProps> = ({
  setFormData,
  setIsLoading,
}) => {
  return (
    <Stack gap={"32px"}>
      <Stack textAlign={"center"} gap={"12px"}>
        <Typography variant="h1">
          Find <span>Airports</span>
        </Typography>
        <Typography variant="h2">
          Access details on airports based on the country you select.
        </Typography>
      </Stack>
      <Stack alignItems={"center"}>
        <ServicesForm
          formFields={formFields}
          actionForm={setFormData}
          actionLoading={setIsLoading}
          validation={validationSchema}
        />
        <ServiceAirportGlobe/>
      </Stack>
    </Stack>
  )
}
export default SectionMain
