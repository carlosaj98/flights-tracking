import { Stack, Typography } from "@mui/material"
import serviceFields from "../configs/serviceFields"
import ServiceCard from "../../../components/ServiceCard/ServiceCard"

const SectionServices = () => {
  return (
    <Stack component={"section"} minHeight={"100%"} gap={"32px"}>
      <Stack id="services-header" alignItems={"center"}>
        <Typography
          variant={"h3"}
          fontFamily={"var(--font-base)"}
          fontSize={"2.25rem"}
          fontWeight={"600"}
        >
          Services
        </Typography>
        <Typography
          fontFamily={"var(--font-base)"}
          fontSize={"1.25rem"}
          fontWeight={"500"}
          color={"var(--gray-semidark)"}
        >
          Explore our services designed to make your travel experience seamless
        </Typography>
      </Stack>
      <Stack flexDirection={"row"} justifyContent={"space-between"}>
        {serviceFields.map((field) => {
          return <ServiceCard key={field.title} serviceField={field} />
        })}
      </Stack>
    </Stack>
  )
}
export default SectionServices
