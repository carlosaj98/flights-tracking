import * as THREE from "three"
import { useRef, useEffect } from "react"
import { GlobeMethods } from "react-globe.gl"


function HeroGlobeData() {
  const globeRef = useRef<GlobeMethods>()
  const N = 15
  const arcsData = [...Array(N).keys()].map(() => ({
    startLat: (Math.random() - 0.5) * 180,
    startLng: (Math.random() - 0.5) * 360,
    endLat: (Math.random() - 0.5) * 180,
    endLng: (Math.random() - 0.5) * 360,
  }))

  const newMaterial = new THREE.MeshBasicMaterial()
  newMaterial.color = new THREE.Color("black")

  useEffect(() => {
    if (globeRef.current) {
      globeRef.current.controls().autoRotate = true
      globeRef.current.controls().autoRotateSpeed = 2
      globeRef.current.controls().enableZoom = false
    }
  }, [])

  return { arcsData, newMaterial, globeRef }
}

export default HeroGlobeData
