import axios from "axios"
import { apiParams } from "../interfaces/apiParams.interface"

const baseURL = "http://api.aviationstack.com/v1"

const axiosBase = axios.create({ baseURL })

function httpService(endpoint: string) {
  const services = {

    getFlights: (params: apiParams) => axiosBase.get(endpoint, { params }),
  }

  return services
}

export default httpService
