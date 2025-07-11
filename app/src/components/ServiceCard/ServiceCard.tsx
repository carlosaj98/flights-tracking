import { Stack, Box, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import ServiceCardContainer from "./ServiceCard.style"
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
      <Stack gap={"6px"} flexGrow={1}>
        <Typography className="service-title" fontSize={"1.15rem"}>
          {serviceField.title}
        </Typography>
        <Typography className="service-desc" fontSize={"14px"}>
          {serviceField.desc}
        </Typography>
      </Stack>
      <Link to={serviceField.link}>SEARCH</Link>
    </ServiceCardContainer>
  )
}
export default ServiceCard
