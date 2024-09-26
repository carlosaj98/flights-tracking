import { FlightData } from "../interfaces/flightData.interface"
const flight: FlightData[] = [
  {
    flight_date: "2024-09-20",
    flight_status: "landed",
    departure: {
      airport: "Barajas",
      timezone: "Europe/Madrid",
      iata: "MAD",
      icao: "LEMD",
      terminal: "4",
      gate: "H27",
      delay: 51,
      scheduled: "2024-09-20T07:10:00+00:00",
      estimated: "2024-09-20T07:10:00+00:00",
      actual: "2024-09-20T08:01:00+00:00",
      estimated_runway: "2024-09-20T08:01:00+00:00",
      actual_runway: "2024-09-20T08:01:00+00:00",
    },
    arrival: {
      airport: "San Pablo",
      timezone: "Europe/Madrid",
      iata: "SVQ",
      icao: "LEZL",
      terminal: "1",
      gate: null,
      baggage: "7",
      delay: 28,
      scheduled: "2024-09-20T08:20:00+00:00",
      estimated: "2024-09-20T08:20:00+00:00",
      actual: "2024-09-20T08:47:00+00:00",
      estimated_runway: "2024-09-20T08:47:00+00:00",
      actual_runway: "2024-09-20T08:47:00+00:00",
    },
    airline: {
      name: "American Airlines",
      iata: "AA",
      icao: "AAL",
    },
    flight: {
      number: "8698",
      iata: "AA8698",
      icao: "AAL8698",
      codeshared: {
        airline_name: "iberia express",
        airline_iata: "i2",
        airline_icao: "ibs",
        flight_number: "3954",
        flight_iata: "i23954",
        flight_icao: "ibs3954",
      },
    },
    aircraft: null,
    live: null,
  },
]

export default flight
