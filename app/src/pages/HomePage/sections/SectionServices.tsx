import { Stack, Typography } from "@mui/material"
import serviceFields from "../configs/serviceFields"
import ServiceCard from "../../../components/ServiceCard/ServiceCard"

const SectionServices = () => {
  return (
    <Stack component={"section"} gap={"24px"} marginBottom={"64px"}>
      <Stack
        id="services-header"
        alignItems={"center"}
        textAlign={"center"}
        gap={"6px"}
      >
        <Typography variant={"h3"}>Services</Typography>
        <Typography
          fontFamily={"var(--font-base)"}
          fontSize={"1.15rem"}
          fontWeight={"500"}
          color={"var(--neutral-600)"}
        >
          Explore powerful tools designed to make flight searches seamless and
          efficient
        </Typography>
      </Stack>
      <Stack
        flexDirection={{ xs: "column", md: "row" }}
        justifyContent={"space-between"}
        gap={"24px"}
      >
        {serviceFields.map((field) => {
          return <ServiceCard key={field.title} serviceField={field} />
        })}
      </Stack>
    </Stack>
  )
}
export default SectionServices
