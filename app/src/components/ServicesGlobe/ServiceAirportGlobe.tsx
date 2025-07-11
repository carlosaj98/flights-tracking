import Globe from "react-globe.gl"
import ServiceAirportData from "./ServiceAirportData"
import useGlobeWidth from "../../hooks/useGlobeWidth"
import {
  AirportCoordsView,
  AirportData,
} from "../../interfaces/airportData.interface"
import { useEffect, useState } from "react"

type GlobeProps = {
  airports: AirportData[]
}

const ServiceAirportGlobe: React.FC<GlobeProps> = ({ airports }) => {
  const [coordsView, setCoordsView] = useState<AirportCoordsView>({
    lat: 0,
    lng: 0,
  })
  useEffect(() => {
    if (airports.length > 0)
      setCoordsView({ lat: airports[0].lat, lng: airports[0].lng })
  }, [airports])

  // const coordsView = { lat: airports[0].lat || 0, lng: airports[0].lng || 0 }
  const { newMaterial, globeRef } = ServiceAirportData(coordsView)

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
