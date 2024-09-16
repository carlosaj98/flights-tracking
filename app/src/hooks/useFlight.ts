/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react"

import httpService from "../services/httpService"
import heroDetailsData from "../pages/HomePage/configs/heroDetailsData"

import { FieldValues } from "react-hook-form"
import { FlightData } from "../interfaces/flightData.interface"

import { apiParams } from "../interfaces/apiParams.interface"

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
          setFlights(transformData[0])
          console.log(transformData[0])
        })
        .finally(() => {
          setIsLoading(false)
        })
    }
  }, [aux])

  return { flights, setFlights, isLoading, setIsLoading }
}
export {useFlight, useFlights}
