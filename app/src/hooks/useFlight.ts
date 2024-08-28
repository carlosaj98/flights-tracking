import { useState, useEffect } from "react"

import httpService from "../services/httpService"

function useFlight(aux, params) {
  const [flight, setFlight] = useState({})
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (isLoading) {
      httpService("/flights")
        .getFlightsOne(params)
        .then(({ data }) => {
          setFlight(data)
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
  }, [aux])

  return {flight, setFlight, isLoading, setIsLoading}
}
export default useFlight
