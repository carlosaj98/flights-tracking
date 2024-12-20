import { useRef, useEffect } from "react"
import { GlobeMethods } from "react-globe.gl"
import * as THREE from "three"

function ServiceAirportData() {
  const globeRef = useRef<GlobeMethods>()

  const texture = new THREE.TextureLoader().load("/earth_map.jpg")
  const newMaterial = new THREE.MeshBasicMaterial({
    map: texture,
    color: "#91c2ff",
  })

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.controls().autoRotate = true
      globeRef.current.controls().autoRotateSpeed = 1
      globeRef.current.controls().enableZoom = true
    }
  }, [])

  return { newMaterial, globeRef }
}

export default ServiceAirportData
