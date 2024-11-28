import Globe from "react-globe.gl"
import ServiceAirportData from "./ServiceAirportData"
import useGlobeWidth from "../../hooks/useGlobeWidth"
import htmlMarkers from "../../utils/htmlMarkers/htmlMarkers"

const ServiceAirportGlobe: React.FC = () => {
  const { newMaterial, globeRef } = ServiceAirportData()

  const N = 30
  const gData = [...Array(N).keys()].map(() => ({
    lat: (Math.random() - 0.5) * 180,
    lng: (Math.random() - 0.5) * 360,
    size: 7 + Math.random() * 30,
    color: ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
  }))

  const { globeWidth } = useGlobeWidth()
  return (
    <Globe
      ref={globeRef}
      width={globeWidth}
      height={globeWidth}
      backgroundColor="rgba(0,0,0,0)"
      htmlElementsData={gData}
      htmlElement={() => htmlMarkers("SVQ")}
      globeMaterial={newMaterial}
      animateIn={false}
      atmosphereColor="#357af9"
    />
  )
}
export default ServiceAirportGlobe
