import ServicesForm from "../../../components/ServicesForm/ServicesForm"
import { Stack, Typography } from "@mui/material"
import formFields from "../configs/formFields"

const SectionMain: React.FC = () => {
  return (
    <Stack gap={"32px"}>
      <Stack alignItems={"center"}>
        <Typography variant="h1">Find one <span>Flight</span></Typography>
        <Typography variant="h2">
          In-Depth Information of Your Selected Flight
        </Typography>
      </Stack>
      <Stack>
        <ServicesForm formFields={formFields} />
      </Stack>
    </Stack>
  )
}
export default SectionMain
