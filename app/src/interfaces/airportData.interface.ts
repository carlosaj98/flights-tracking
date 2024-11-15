export interface AirportData {
  name:         string;
  iata_code:    null | string;
  icao_code:    string;
  lat:          number;
  lng:          number;
  country_code: string;
}