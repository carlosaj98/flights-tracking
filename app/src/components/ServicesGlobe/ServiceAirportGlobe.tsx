import Globe from "react-globe.gl"
import ServiceAirportData from "./ServiceAirportData"
import useGlobeWidth from "../../hooks/useGlobeWidth"
import { AirportData } from "../../interfaces/airportData.interface"

type GlobeProps = {
  airports: AirportData[]
}

const ServiceAirportGlobe: React.FC<GlobeProps> = ({airports}) => {
  const { newMaterial, globeRef } = ServiceAirportData()

  // const N = 30
  // const gData = [...Array(N).keys()].map(() => ({
  //   lat: (Math.random() - 0.5) * 180,
  //   lng: (Math.random() - 0.5) * 360,
  //   size: 7 + Math.random() * 30,
  //   color: ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
  // }))

  const { globeWidth } = useGlobeWidth()
  return (
    <Globe
      ref={globeRef}
      width={globeWidth}
      height={globeWidth}
      backgroundColor="rgba(0,0,0,0)"
      pointsData={airports}
      pointColor={()=>"#fabc34"}
      pointAltitude={0.1}
      pointRadius={0.15}
      pointResolution={6}
      globeMaterial={newMaterial}
      animateIn={true}
      atmosphereColor="#357af9"
    />
  )
}
export default ServiceAirportGlobe
