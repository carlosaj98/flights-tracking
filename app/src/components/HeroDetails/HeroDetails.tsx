import HeroDetailsContainer from "./HeroDetails.style"
import { FlightData } from "../../interfaces/flightData.interface"
import HeroDetailsHeader from "./HeroDetailsHeader"
import HeroDetailsContent from "./HeroDetailsContent"

interface HeroDetailsProps {
  data: FlightData[]
}

const HeroDetails: React.FC<HeroDetailsProps> = ({ data }) => {
  return (
    <HeroDetailsContainer>
      <HeroDetailsHeader />
      <HeroDetailsContent data={data} />
    </HeroDetailsContainer>
  )
}

export default HeroDetails
