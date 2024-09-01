import { Stack, Box, Typography } from "@mui/material"
import ServiceCardContainer from "./ServiceCard.style"
import { ServiceButton } from "../../common/Buttons"
import { serviceFieldInterface } from "../../interfaces/serviceFields.interface"

interface ServiceCardProps {
  serviceField: serviceFieldInterface
}

const ServiceCard: React.FC<ServiceCardProps> = ({ serviceField }) => {
  return (
    <ServiceCardContainer>
      <Box width={"100px"} height={"100px"} sx={{ objectFit: "contain" }}>
        <img src={serviceField.image} width={"100%"} height={"100%"}></img>
      </Box>
      <Stack>
        <Typography className="service-title" fontSize={"1.25rem"}>
          {serviceField.title}
        </Typography>
        <Typography className="service-desc" fontSize={"1rem"}>
          {serviceField.desc}
        </Typography>
      </Stack>
      <ServiceButton text="SEARCH" />
    </ServiceCardContainer>
  )
}
export default ServiceCard
