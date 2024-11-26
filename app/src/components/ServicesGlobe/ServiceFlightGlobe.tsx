import Globe from "react-globe.gl"
import ServiceFlightData from "./ServiceFlightData"
import useGlobeWidth from "../../hooks/useGlobeWidth"
import { FlightData } from "../../interfaces/flightData.interface"

type GlobeProps = {
  flights: FlightData[]
  flightsDirection: string
  airportCode: string
  type: "single" | "multiple"
}

const ServiceFlightGlobe: React.FC<GlobeProps> = ({
  flights,
  flightsDirection,
  airportCode,
  type
}) => {
  const { arcsData, newMaterial, globeRef } = ServiceFlightData(
    flights,
    flightsDirection,
    airportCode,
    type
  )
  const { globeWidth } = useGlobeWidth()

  return (
    <Globe
      ref={globeRef}
      width={globeWidth}
      height={globeWidth}
      backgroundColor="rgba(0,0,0,0)"
      globeMaterial={newMaterial}
      arcsData={arcsData}
      arcColor={["#fce28b", "#fabc34", "#d87007"]}
      arcStroke={0.5}
      arcDashLength={1}
      arcDashGap={() => 1}
      arcDashAnimateTime={1500}
      animateIn={false}
      atmosphereColor="#357af9"
    />
  )
}
export default ServiceFlightGlobe
