import Globe from "react-globe.gl"
import ServiceFlightData from "./ServiceFlightData"
import useGlobeWidth from "../../hooks/useGlobeWidth"
import { FlightData } from "../../interfaces/flightData.interface"
import { useEffect, useState } from "react"
import { airports } from "../../utils/airportsData.json"
import { AirportCoordsView } from "../../interfaces/airportData.interface"

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
  type,
}) => {
  const [coordsView, setCoordsView] = useState<AirportCoordsView>({
    lat: 0,
    lng: 0,
  })
  const { arcsData, newMaterial, globeRef } = ServiceFlightData(
    flights,
    flightsDirection,
    airportCode,
    type,
    coordsView
  )
  const { globeWidth } = useGlobeWidth()

  useEffect(() => {
    if (flights.length > 0) {
      const airportCoords = airports.find((airport) => {
        return airport.iata_code === airportCode.toUpperCase()
      })
      setCoordsView({
        lat: airportCoords?.lat || 0,
        lng: airportCoords?.lng || 0,
      })
    }
  }, [flights])

  return (
    <Globe
      ref={globeRef}
      width={globeWidth}
      height={globeWidth}
      backgroundColor="rgba(0,0,0,0)"
      globeMaterial={newMaterial}
      arcsData={arcsData}
      arcColor={() => "rgba(244, 150, 12, 1)"}
      arcStroke={0.75}
      arcDashLength={1}
      arcDashGap={() => 1}
      arcDashAnimateTime={1500}
      animateIn={true}
      atmosphereColor="#91c2ff"
      atmosphereAltitude={0.15}
    />
  )
}
export default ServiceFlightGlobe
