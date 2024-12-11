import { FlightData } from "../interfaces/flightData.interface"
import { airports } from "./airportsData.json"

function flightTransform(transformData: FlightData[]) {
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
    return updatedFlights
  }
}
export default flightTransform
