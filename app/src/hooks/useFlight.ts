/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react"

import httpService from "../services/httpService"

import { FieldValues } from "react-hook-form"
import { FlightData, Pagination } from "../interfaces/flightData.interface"

import { apiParams } from "../interfaces/apiParams.interface"

import { airports } from "../utils/airportsData.json"
import { useNavigate } from "react-router-dom"
import notify from "../utils/notify"
import flightTransform from "../utils/flightTransform"

function useFlight(aux: FieldValues, params: apiParams) {
  const [flight, setFlight] = useState<FlightData[]>([])
  const [direction, setDirection] = useState<"arrival" | "departure">("arrival")
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (isLoading) {
      httpService("/flights")
        .getFlights(params)
        .then(({ data }) => {
          const transformData = data.data.filter(
            ({ flight_date }: { flight_date: string }) =>
              flight_date === aux.date
          )
          const updatedFlights = flightTransform(transformData)
          if (updatedFlights) {
            setFlight(updatedFlights)
            sessionStorage.setItem("flight", JSON.stringify(updatedFlights[0]))
          }
          !data.data.length
            ? notify("error", "Error finding flight")
            : notify("success", "Flight found successfully")
        })
        .catch((error) => {
          console.error("Error finding flights:", error)
          notify("error", "Error finding flight")
        })
        .finally(() => {
          setIsLoading(false)
          navigate("/flight")
          console.log(flight)
        })
    }
  }, [aux])

  return { flight, setFlight, isLoading, setIsLoading, setDirection, direction }
}

function useFlights(aux: FieldValues, params: apiParams) {
  const [flights, setFlights] = useState<FlightData[]>([])
  const [pagination, setPagination] = useState<Pagination | null>(null)
  const [direction, setDirection] = useState<"arrival" | "departure">("arrival")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (isLoading) {
      httpService("/flights")
        .getFlights(params)
        .then(({ data }) => {
          const updatedFlights = data.data.map((data: FlightData) => {
            const coordTracked = airports.filter(
              (airport) => airport.iata_code === data[direction].iata
            )
            if (coordTracked.length > 0) {
              return {
                ...data,
                lat: coordTracked[0].lat,
                lng: coordTracked[0].lng,
              }
            }
            return data
          })
          setFlights(updatedFlights)
          setPagination(data.pagination)
          !data.data.length
            ? notify("error", "Error finding flights")
            : notify("success", "Flights found successfully")
        })
        .catch((error) => {
          console.error("Error finding flights:", error)
          notify("error", "Error finding flights")
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
  }, [aux, params])

  return {
    flights,
    setFlights,
    isLoading,
    setIsLoading,
    setDirection,
    direction,
    pagination,
  }
}
export { useFlight, useFlights }
