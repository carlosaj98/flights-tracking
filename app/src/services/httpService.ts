import axios from "axios"

const baseURL = "http://api.aviationstack.com/v1"

const axiosBase = axios.create({ baseURL })

function httpService(endpoint: string) {
  const services = {
    getFlightsAll: () => axiosBase.get(endpoint),

    getFlightsOne: (params) => axiosBase.get(endpoint, { params }),
  }

  return services
}

export default httpService
