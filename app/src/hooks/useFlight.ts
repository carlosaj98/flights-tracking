import { useState, useEffect } from "react"

import httpService from "../services/httpService"

import { FieldValues } from "react-hook-form"

interface paramsInterface {
  access_key: string
  airline_name: string
  flight_iata: string
}

function useFlight(aux: FieldValues, params: paramsInterface) {
  const [flight, setFlight] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (isLoading) {
      httpService("/flights")
        .getFlightsOne(params)
        .then(({ data }) => {
          const transformData = data.data.filter(
            ({ flight_date }: { flight_date: string }) =>
              flight_date === aux.date
          )
          setFlight(transformData[0])
          console.log(transformData[0])
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
  }, [aux])

  return { flight, setFlight, isLoading, setIsLoading }
}
export default useFlight
