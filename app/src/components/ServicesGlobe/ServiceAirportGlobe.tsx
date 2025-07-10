import Globe from "react-globe.gl"
import ServiceAirportData from "./ServiceAirportData"
import useGlobeWidth from "../../hooks/useGlobeWidth"
import { AirportData } from "../../interfaces/airportData.interface"

type GlobeProps = {
  airports: AirportData[]
}

const ServiceAirportGlobe: React.FC<GlobeProps> = ({ airports }) => {
  const { newMaterial, globeRef } = ServiceAirportData()

  const { globeWidth } = useGlobeWidth()
  return (
    <Globe
      ref={globeRef}
      width={globeWidth}
      height={globeWidth}
      backgroundColor="rgba(0,0,0,0)"
      pointsData={airports}
      pointColor={() => "rgba(244, 150, 12, 0.75)"}
      pointAltitude={0.1}
      pointRadius={0.2}
      pointResolution={6}
      globeMaterial={newMaterial}
      animateIn={true}
      atmosphereColor="#91c2ff"
      atmosphereAltitude={0.15}
      pointLabel={""}
      pointsMerge={true}
    />
  )
}
export default ServiceAirportGlobe
