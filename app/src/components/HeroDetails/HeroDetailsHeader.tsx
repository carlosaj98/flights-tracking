import { Stack, Typography } from "@mui/material"
import { IconPlane } from "../../common/Icons"

const HeroDetailsHeader: React.FC = () => {
  return (
    <Stack
      flexDirection={{ sm: "row", xs: "column" }}
      justifyContent={"space-between"}
      alignItems={"center"}
      textAlign={"center"}
      gap={{ sm: "0px", xs: "12px" }}
      id="header-details-container"
    >
      <Stack
        className="header-details-item"
        alignItems={{ sm: "flex-start", xs: "center" }}
      >
        <Typography
          className="header-text-title"
          fontSize={{ md: "1.25rem", xs: "1.1rem" }}
        >
          UA2402
        </Typography>
        <Typography
          className="header-text-subtitle"
          fontSize={{ md: "1rem", xs: "0.85rem" }}
        >
          United Airlines (UA)
        </Typography>
      </Stack>
      <Stack
        className="header-details-item"
        flexDirection={{ sm: "row", xs: "column" }}
        gap={{ sm: "0px", xs: "12px" }}
        borderTop={{ sm: "none", xs: "2px solid var(--primary-color-dark)" }}
        borderBottom={{ sm: "none", xs: "2px solid var(--primary-color-dark)" }}
        padding={{ sm: "0px", xs: "12px 0px" }}
        alignItems={"center"}
      >
        <Stack width={"100%"}>
          <Typography
            className="header-text-title"
            fontSize={{ md: "1.25rem", xs: "1.1rem" }}
          >
            LAX
          </Typography>
          <Typography
            className="header-text-subtitle"
            fontSize={{ md: "1rem", xs: "0.85rem" }}
          >
            Los Angeles Int.
          </Typography>
        </Stack>
        <Stack
          width={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ rotate: { sm: "0deg", xs: "90deg" } }}
        >
          <IconPlane />
        </Stack>
        <Stack width={"100%"}>
          <Typography
            className="header-text-title"
            fontSize={{ md: "1.25rem", xs: "1.1rem" }}
          >
            BOS
          </Typography>
          <Typography
            className="header-text-subtitle"
            fontSize={{ md: "1rem", xs: "0.85rem" }}
          >
            Logan Int.
          </Typography>
        </Stack>
      </Stack>

      <Stack
        className="header-details-item"
        alignItems={{ sm: "flex-end", xs: "center" }}
      >
        <Typography
          className="header-text-title"
          fontSize={{ md: "1.25rem", xs: "1.1rem" }}
        >
          Airborne
        </Typography>
        <Typography
          className="header-text-subtitle"
          fontSize={{ md: "1rem", xs: "0.85rem" }}
        >
          On Time
        </Typography>
      </Stack>
    </Stack>
  )
}

export default HeroDetailsHeader
