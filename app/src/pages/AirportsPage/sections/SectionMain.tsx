import { Stack, Typography } from "@mui/material"
// import ServicesForm from "../../../components/ServicesForm/ServicesForm"
// import { formFields } from "../configs/formFields"

const SectionMain: React.FC = () => {
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
        {/* <ServicesForm formFields={formFields} /> */}
      </Stack>
    </Stack>
  )
}
export default SectionMain
