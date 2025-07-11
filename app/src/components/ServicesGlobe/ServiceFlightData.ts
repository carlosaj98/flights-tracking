import * as THREE from "three"
import { useRef, useEffect } from "react"
import { GlobeMethods } from "react-globe.gl"
import { FlightData } from "../../interfaces/flightData.interface"
import { airports } from "../../utils/airportsData.json"
import { AirportCoordsView } from "../../interfaces/airportData.interface"

function ServiceFlightData(
  flights: FlightData[],
  flightsDirection: string,
  airportCode: string,
  type: "single" | "multiple",
  coordsView: AirportCoordsView
) {
  const [airportFiltered] = airports.filter(
    (airport) => airport.iata_code === airportCode?.toUpperCase()
  )

  const globeRef = useRef<GlobeMethods>()
  const arcsData = flights.map((flight) => {
    if (type === "single") {
      return {
        startLat: flight.lat_departure,
        startLng: flight.lng_departure,
        endLat: flight.lat_arrival,
        endLng: flight.lng_arrival,
      }
    } else {
      return flightsDirection === "arr_iata"
        ? {
            startLat: flight.lat,
            startLng: flight.lng,
            endLat: airportFiltered.lat,
            endLng: airportFiltered.lng,
          }
        : {
            startLat: airportFiltered.lat,
            startLng: airportFiltered.lng,
            endLat: flight.lat,
            endLng: flight.lng,
          }
    }
  })

  const texture = new THREE.TextureLoader().load("/earth_map.jpg")
  const newMaterial = new THREE.MeshBasicMaterial({
    map: texture,
    color: "white",
  })

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.controls().enableZoom = true
      globeRef.current.pointOfView(
        {
          lat: coordsView.lat,
          lng: coordsView.lng,
          altitude: 2
        },
        500
      )
    }
  }, [coordsView])

  return { arcsData, newMaterial, globeRef }
}

export default ServiceFlightData
