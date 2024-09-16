/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react"

import httpService from "../services/httpService"
import heroDetailsData from "../pages/HomePage/configs/heroDetailsData"

import { FieldValues } from "react-hook-form"
import { FlightData } from "../interfaces/flightData.interface"

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
  const [direction, setDirection] = useState<"arrival" | "departure">(
    "departure"
  )
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
            console.log(coordTracked)
            if (coordTracked.length > 0) {
              return {
                ...data,
                lat: coordTracked[0].lat,
                lng: coordTracked[0].lng,
              }
            }
            return data
          })
          // setFlights(transformData)
          console.log(updatedFlights)
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
  }, [aux])

  return { flights, setFlights, isLoading, setIsLoading, setDirection }
}
export { useFlight, useFlights }
