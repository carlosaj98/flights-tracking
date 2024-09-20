
export interface Pagination  {
  limit:  number;
  offset: number;
  count:  number;
  total:  number;
}

export interface FlightData {
  flight_date: string
  flight_status: string
  departure: Direction
  arrival: Direction
  airline: Airline
  flight: Flight
  aircraft: Aircraft
  live: Live
  lat?: number
  lng?: number
}

export interface Aircraft {
  registration: string
  iata: string
  icao: string
  icao24: string
}

export interface Airline {
  name: string
  iata: string
  icao: string
}

export interface Direction {
  airport: string
  timezone: string
  iata: string
  icao: string
  terminal: string
  gate: string
  baggage?: string
  delay: number
  scheduled: string
  estimated: string
  actual: string | null
  estimated_runway: string | null
  actual_runway: string | null
}

export interface Flight {
  number: string
  iata: string
  icao: string
  codeshared: null
}

export interface Live {
  updated: string
  latitude: number
  longitude: number
  altitude: number
  direction: number
  speed_horizontal: number
  speed_vertical: number
  is_ground: boolean
}

