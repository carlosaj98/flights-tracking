export interface Pagination {
  limit: number
  offset: number
  count: number
  total: number
}

export interface FlightData {
  flight_date: string | null
  flight_status: string | null
  departure: Direction
  arrival: Direction
  airline: Airline
  flight: Flight
  aircraft: Aircraft | null
  live: Live | null
  lat?: number | null
  lng?: number | null
  lat_arrival?: number | null
  lng_arrival?: number | null
  lat_departure?: number | null
  lng_departure?: number | null
}

export interface Aircraft {
  registration: string | null
  iata: string | null
  icao: string | null
  icao24: string | null
}

export interface Airline {
  name: string | null
  iata: string | null
  icao: string | null
}

export interface Direction {
  airport: string | null
  timezone: string | null
  iata: string | null
  icao: string | null
  terminal: string | null
  gate: string | null
  baggage?: string | null
  delay: number | null
  scheduled: string | null
  estimated: string | null
  actual: string | null
  estimated_runway: string | null
  actual_runway: string | null
}

export interface Flight {
  number: string | null
  iata: string | null
  icao: string | null
  codeshared: Codeshared | null
}

export interface Codeshared {
  airline_name: string | null
  airline_iata: string | null
  airline_icao: string | null
  flight_number: string | null
  flight_iata: string | null
  flight_icao: string | null
}

export interface Live {
  updated: string | null
  latitude: number | null
  longitude: number | null
  altitude: number | null
  direction: number | null
  speed_horizontal: number | null
  speed_vertical: number | null
  is_ground: boolean | null
}
