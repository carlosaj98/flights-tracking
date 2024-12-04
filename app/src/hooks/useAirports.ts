import { useState, useEffect } from "react"
import httpService from "../services/httpService"
import { FieldValues } from "react-hook-form"
import { apiAirportsParams } from "../interfaces/apiParams.interface"
import { AirportData } from "../interfaces/airportData.interface"
import notify from "../utils/notify"

function useAirports(aux: FieldValues, params: apiAirportsParams) {
  const [airports, setAirports] = useState<AirportData[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (isLoading) {
      httpService("/airports")
        .getAirports(params)
        .then(({ data }) => {
          console.log(data.response)
          setAirports(data.response)
          !data.response.length
            ? notify("error", "Error finding airports")
            : notify("success", "Airports found successfully")
        })
        .catch((error) => {
          console.error("Error finding airports:", error)
          notify("error", "Error finding airports")
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [aux, params])

  return { airports, setAirports, isLoading, setIsLoading }
}

export default useAirports
