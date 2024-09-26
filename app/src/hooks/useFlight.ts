/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react"

import httpService from "../services/httpService"

import { FieldValues } from "react-hook-form"
import { FlightData, Pagination } from "../interfaces/flightData.interface"

import { apiParams } from "../interfaces/apiParams.interface"

import { airports } from "../utils/airportsData.json"

function useFlight(aux: FieldValues, params: apiParams) {
  const [flight, setFlight] = useState<FlightData[]>([])
  const [direction, setDirection] = useState<"arrival" | "departure">("arrival")
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (isLoading) {
      httpService("/flights")
        .getFlights(params)
        .then(({ data }) => {
          const transformData = data.data.filter(
            ({ flight_date }: { flight_date: string }) =>
              flight_date === aux.date
          )
          const coordTrackedDeparture = airports.filter(
            (airport) => airport.iata_code === transformData[0].departure.iata
          )
          const coordTrackedArrival = airports.filter(
            (airport) => airport.iata_code === transformData[0].arrival.iata
          )

          if (coordTrackedDeparture.length > 0 && coordTrackedArrival.length) {
            const updatedFlights: FlightData[] = [
              {
                ...transformData[0],
                lat_departure: coordTrackedDeparture[0].lat,
                lng_departure: coordTrackedDeparture[0].lng,
                lat_arrival: coordTrackedArrival[0].lat,
                lng_arrival: coordTrackedArrival[0].lng,
              },
            ]
            setFlight(updatedFlights)
            
          }
        })
        .finally(() => {
          setIsLoading(false)
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
