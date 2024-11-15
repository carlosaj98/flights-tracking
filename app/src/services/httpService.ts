import axios from "axios"
import { apiAirportsParams, apiParams } from "../interfaces/apiParams.interface"

const baseURL = "http://api.aviationstack.com/v1"
const baseAirportsURL = "https://airlabs.co/api/v9"

const axiosBase = axios.create({ baseURL })

const axiosBaseAirports = axios.create({ baseURL: baseAirportsURL })

function httpService(endpoint: string) {
  const services = {
    getFlights: (params: apiParams) => axiosBase.get(endpoint, { params }),

    getAirports: (params: apiAirportsParams) =>
      axiosBaseAirports.get(endpoint, { params }),
  }

  return services
}

export default httpService
