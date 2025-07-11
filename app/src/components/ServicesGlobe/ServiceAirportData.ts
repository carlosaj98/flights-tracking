import { useRef, useEffect } from "react"
import { GlobeMethods } from "react-globe.gl"
import { AirportCoordsView } from "../../interfaces/airportData.interface"
import * as THREE from "three"

function ServiceAirportData(coords: AirportCoordsView) {
  const globeRef = useRef<GlobeMethods>()

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
          lat: coords.lat,
          lng: coords.lng,
        },
        500
      )
    }
  }, [coords])

  return { newMaterial, globeRef }
}

export default ServiceAirportData
