import { Box, Button, Stack, Typography } from "@mui/material"
import AirportCard from "../../../components/AirportCard/AirportCard"
import { IconArrow } from "../../../common/Icons"
import { useState, useEffect } from "react"
import { AirportData } from "../../../interfaces/airportData.interface"

type SectionAirportsProps = {
  airports: AirportData[]
  isLoading: boolean
}

const SectionAirports: React.FC<SectionAirportsProps> = ({
  airports,
  isLoading,
}) => {
  const [firstLimit, setFirstLimit] = useState(0)
  const [secondLimit, setSecondLimit] = useState(20)
  const [page, setPage] = useState(1)
  useEffect(() => {
    setFirstLimit(0)
    setSecondLimit(20)
    setPage(1)
  }, [isLoading])
  return (
    <Stack
      alignItems={"center"}
      className="section-airports"
      gap={"12px"}
      marginTop={"32px"}
    >
      <Typography variant="h3">Airports</Typography>
      <Typography id="airport-country-code">
        Country code: <span>{airports[0].country_code}</span>
      </Typography>
      <Typography id="airports-count">
        Found airports: <span>{airports.length}</span>
      </Typography>
      <Stack
        gap={"48px"}
        flexDirection={"row"}
        width={"100%"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Button
          className="btn-pages"
          variant="contained"
          sx={{ width: { sm: "100px", xs: "75px" } }}
          disabled={firstLimit === 0}
          onClick={() => {
            setFirstLimit((prev) => prev - 20),
              setSecondLimit((prev) => prev - 20)
            setPage((prev) => prev - 1)
          }}
        >
          <Box height={"20px"}>
            <IconArrow direction="left" />
          </Box>
        </Button>
        <Typography id="pagination">
          Page: {page} / {Math.round(airports.length / 20)}
        </Typography>
        <Button
          className="btn-pages"
          variant="contained"
          sx={{ width: { sm: "100px", xs: "75px" } }}
          disabled={secondLimit >= airports.length}
          onClick={() => {
            setFirstLimit((prev) => prev + 20),
              setSecondLimit((prev) => prev + 20)
            setPage((prev) => prev + 1)
          }}
        >
          <Box height={"20px"}>
            <IconArrow direction="right" />
          </Box>
        </Button>
      </Stack>
      <Stack
        gap={{ lg: "24px", xs: "16px" }}
        flexDirection={"row"}
        justifyContent={"center"}
        flexWrap={"wrap"}
        marginTop={"24px"}
      >
        {airports.slice(firstLimit, secondLimit).map((airport) => {
          return <AirportCard key={airport.name} airport={airport} />
        })}
      </Stack>
    </Stack>
  )
}
export default SectionAirports
