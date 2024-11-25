export interface apiParams {
  access_key: string
  dep_iata?: string
  arr_iata?: string
  airline_name?: string
  flight_iata?: string
  limit?: number,
  offset?: number
}

export interface apiAirportsParams {
  api_key: string
  country_code: string
  iata_code: string
}
