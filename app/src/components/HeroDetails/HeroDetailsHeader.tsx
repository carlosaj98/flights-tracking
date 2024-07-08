import { Stack } from "@mui/material"
import { IconPlane } from "../../common/Icons"

const HeroDetailsHeader: React.FC = () => {
  return (
    <Stack
      flexDirection={"row"}
      justifyContent={"space-between"}
      alignItems={"center"}
      textAlign={"center"}
      id="header-details-container"
    >
      <Stack className="header-details-item">
        <p className="header-text-title">UA2402</p>
        <p className="header-text-subtitle">United Airlines (UA)</p>
      </Stack>
      <Stack className="header-details-item">
        <Stack width={"100%"}>
          <p className="header-text-title">LAX</p>
          <p className="header-text-subtitle">Los Angeles Int.</p>
        </Stack>
        <Stack width={"100%"} alignItems={"center"} justifyContent={"center"}>
          <IconPlane />
        </Stack>
        <Stack width={"100%"}>
          <p className="header-text-title">BOS</p>
          <p className="header-text-subtitle">Logan Int.</p>
        </Stack>
      </Stack>

      <Stack className="header-details-item">
        <p className="header-text-title">Airborne</p>
        <p className="header-text-subtitle">On Time</p>
      </Stack>
    </Stack>
  )
}

export default HeroDetailsHeader
