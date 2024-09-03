import { Stack, Typography } from "@mui/material"
import serviceFields from "../configs/serviceFields"
import ServiceCard from "../../../components/ServiceCard/ServiceCard"

const SectionServices = () => {
  return (
    <Stack component={"section"} gap={"32px"} >
      <Stack id="services-header" alignItems={"center"} textAlign={"center"}>
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
      <Stack flexDirection={{lg:"row", xs:"column"}} justifyContent={"space-between"} gap={"24px"}>
        {serviceFields.map((field) => {
          return <ServiceCard key={field.title} serviceField={field} />
        })}
      </Stack>
    </Stack>
  )
}
export default SectionServices
