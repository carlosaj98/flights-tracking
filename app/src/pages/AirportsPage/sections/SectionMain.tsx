import { Stack, Typography } from "@mui/material"

const SectionMain: React.FC = () => {
  return (
    <Stack textAlign={"center"} gap={"12px"}>
      <Typography variant="h1">
        Find <span>Airports</span>
      </Typography>
      <Typography variant="h2">
        Access details on airports based on the country you select.
      </Typography>
    </Stack>
  )
}
export default SectionMain
