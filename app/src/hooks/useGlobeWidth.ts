import { useState, useEffect } from "react"

function useGlobeWidth() {
  const [globeWidth, setGlobeWidth] = useState(400)

  const updateGlobeWidth = () => {
    if (innerWidth > 1200) {
      setGlobeWidth(600)
    } else if (innerWidth > 900) {
      setGlobeWidth(400)
    } else if (innerWidth > 600) {
      setGlobeWidth(innerWidth / 2)
    } else {
      setGlobeWidth(innerWidth / 1.5)
    }
  }

  useEffect(() => {
    updateGlobeWidth()
    window.addEventListener("resize", updateGlobeWidth)
  }, [])

  return { globeWidth }
}

export default useGlobeWidth
