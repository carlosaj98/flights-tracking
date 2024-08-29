import axios from "axios"

const baseURL = "http://api.aviationstack.com/v1"

const axiosBase = axios.create({ baseURL })

interface paramsInterface {
  access_key: string
  airline_name: string
  flight_iata: string
}

function httpService(endpoint: string) {
  const services = {
    getFlightsAll: () => axiosBase.get(endpoint),

    getFlightsOne: (params: paramsInterface) => axiosBase.get(endpoint, { params }),
  }

  return services
}

export default httpService
