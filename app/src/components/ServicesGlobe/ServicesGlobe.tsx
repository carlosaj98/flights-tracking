import Globe from "react-globe.gl"
import data from "../../utils/geoData.json"
import ServicesGlobeData from "./ServicesGlobeData"
import useGlobeWidth from "../../hooks/useGlobeWidth"
import { FlightData } from "../../interfaces/flightData.interface"

type GlobeProps = {
  flights: FlightData[]
  flightsDirection: string
  airportCode: string
}

const ServicesGlobe: React.FC<GlobeProps> = ({
  flights,
  flightsDirection,
  airportCode,
}) => {
  const { arcsData, newMaterial, globeRef } = ServicesGlobeData(
    flights,
    flightsDirection,
    airportCode
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
      hexPolygonsData={data.features}
      hexPolygonResolution={3}
      hexPolygonMargin={0.3}
      hexPolygonColor={() => "#357af9"}
      animateIn={false}
      atmosphereColor="#357af9"
    />
  )
}
export default ServicesGlobe
