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
  const maxPerPage = 18
  const [firstLimit, setFirstLimit] = useState(0)
  const [secondLimit, setSecondLimit] = useState(maxPerPage)
  const [page, setPage] = useState(1)
  useEffect(() => {
    setFirstLimit(0)
    setSecondLimit(maxPerPage)
    setPage(1)
  }, [isLoading])
  return (
    <Stack
      alignItems={"center"}
      className="section-airports"
      gap={"12px"}
      marginTop={"32px"}
    >
      <Stack
        width={"100%"}
        borderTop={"2px solid var(--neutral-200)"}
        paddingTop={"24px"}
      >
        <Typography variant="h3">Airports Results</Typography>
      </Stack>
      <Stack flexDirection={"row"} gap={"24px"} width={"100%"}>
        <Typography id="airport-country-code">
          Country code: <span>{airports[0].country_code}</span>
        </Typography>
        <Typography id="airports-count">
          Found <span>{airports.length}</span> airports
        </Typography>
      </Stack>

      <Stack
        gap={{ lg: "12px", xs: "12px" }}
        flexDirection={"row"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        marginTop={"24px"}
        width={"100%"}
      >
        {airports.slice(firstLimit, secondLimit).map((airport) => {
          return (
            <AirportCard
              key={airport.name + Math.random() * 1000}
              airport={airport}
            />
          )
        })}
      </Stack>
      <Stack
        gap={"24px"}
        flexDirection={"row"}
        width={"100%"}
        justifyContent={{ md: "center", xs: "space-between" }}
        alignItems={"center"}
        marginTop={"12px"}
      >
        <Button
          className="btn-pages"
          variant="contained"
          disableElevation
          sx={{ width: { sm: "120px", xs: "100px" } }}
          disabled={firstLimit === 0}
          onClick={() => {
            setFirstLimit((prev) => prev - maxPerPage),
              setSecondLimit((prev) => prev - maxPerPage)
            setPage((prev) => prev - 1)
          }}
        >
          <Box height={"20px"}>
            <IconArrow direction="left" />
          </Box>
          Previous
        </Button>
        <Typography id="pagination">
          {`Page ${page} of ${
            airports.length < maxPerPage
              ? 1
              : Math.ceil(airports.length / maxPerPage)
          }`}
        </Typography>
        <Button
          className="btn-pages"
          variant="contained"
          disableElevation
          sx={{ width: { sm: "120px", xs: "100px" } }}
          disabled={secondLimit >= airports.length}
          onClick={() => {
            setFirstLimit((prev) => prev + maxPerPage),
              setSecondLimit((prev) => prev + maxPerPage)
            setPage((prev) => prev + 1)
          }}
        >
          Next
          <Box height={"20px"}>
            <IconArrow direction="right" />
          </Box>
        </Button>
      </Stack>
    </Stack>
  )
}
export default SectionAirports
