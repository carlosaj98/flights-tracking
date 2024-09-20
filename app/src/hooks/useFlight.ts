/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react"

import httpService from "../services/httpService"
import heroDetailsData from "../pages/HomePage/configs/heroDetailsData"

import { FieldValues } from "react-hook-form"
import { FlightData, Pagination } from "../interfaces/flightData.interface"

import { apiParams } from "../interfaces/apiParams.interface"

import { airports } from "../utils/airportsData.json"

function useFlight(aux: FieldValues, params: apiParams) {
  const [flight, setFlight] = useState<FlightData>(heroDetailsData)
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
          const transformData = data.data.filter(
            ({ flight_date }: { flight_date: string }) =>
              flight_date === aux.date
          )
          const updatedFlights = transformData.map((data: FlightData) => {
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
