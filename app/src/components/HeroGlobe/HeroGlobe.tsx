import Globe from "react-globe.gl"
import data from "../../utils/geoData.json"
import HeroGlobeData from "./HeroGlobeData"
import useGlobeWidth from "../../hooks/useGlobeWidth"

const HeroGlobe: React.FC = () => {
  const { arcsData, newMaterial, globeRef } = HeroGlobeData()
  const { globeWidth } = useGlobeWidth()

  return (
    <Globe
      ref={globeRef}
      width={globeWidth}
      height={globeWidth}
      backgroundColor="rgba(0,0,0,0)"
      globeMaterial={newMaterial}
      arcsData={arcsData}
      arcColor={["#91c2ff", "#357af9", "#1a48db"]}
      arcStroke={1}
      arcDashLength={1}
      arcDashGap={() => Math.random() * 3}
      arcDashAnimateTime={2000}
      hexPolygonsData={data.features}
      hexPolygonResolution={3}
      hexPolygonMargin={0.3}
      hexPolygonColor={() => "white"}
      animateIn={false}
      atmosphereColor="#357af9"
    />
  )
}
export default HeroGlobe
