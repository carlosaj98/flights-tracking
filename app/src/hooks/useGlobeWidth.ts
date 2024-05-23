import { useState, useEffect } from "react"

function useGlobeWidth() {
  const [globeWidth, setGlobeWidth] = useState(1040)

  const updateGlobeWidth = () => {
    if (innerWidth > 1040) {
      setGlobeWidth(1040)
    } else if (innerWidth > 800) {
      setGlobeWidth(800)
    } else if (innerWidth > 600) {
      setGlobeWidth(600)
    }
  }

  useEffect(() => {
    updateGlobeWidth()
    window.addEventListener("resize", updateGlobeWidth)
  }, [])

  return { globeWidth }
}

export default useGlobeWidth
