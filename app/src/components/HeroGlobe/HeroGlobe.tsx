import Globe from "react-globe.gl"
import data from "./geoData"
import * as THREE from "three"
import { useRef, useEffect } from "react"
import { GlobeMethods } from "react-globe.gl"

const HeroGlobe: React.FC = () => {
  const globeEl = useRef<GlobeMethods>()
  const N = 15
  const arcsData = [...Array(N).keys()].map(() => ({
    startLat: (Math.random() - 0.5) * 180,
    startLng: (Math.random() - 0.5) * 360,
    endLat: (Math.random() - 0.5) * 180,
    endLng: (Math.random() - 0.5) * 360,
  }))

  const newMaterial = new THREE.MeshBasicMaterial()
  newMaterial.color = new THREE.Color("#0e2b5d")

  useEffect(() => {
    if (globeEl.current) {
      globeEl.current.controls().autoRotate = true
      globeEl.current.controls().autoRotateSpeed = 3
      globeEl.current.controls().enableZoom = false
    }
  }, [])

  return (
    <Globe
      ref={globeEl}
      width={innerWidth / 2.5}
      height={innerWidth / 2.5}
      backgroundColor="rgba(0,0,0,0)"
      globeMaterial={newMaterial}
      arcsData={arcsData}
      arcColor={["#ffde46", "#ffaa00", "#bb5902"]}
      arcStroke={1}
      arcDashLength={1}
      arcDashGap={() => Math.random() * 3}
      arcDashAnimateTime={2000}
      hexPolygonsData={data.features}
      hexPolygonResolution={3}
      hexPolygonMargin={0.3}
      hexPolygonColor={() => "#1e9bff"}
    />
  )
}
export default HeroGlobe
