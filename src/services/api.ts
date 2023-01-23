import axios from 'axios'
import { API_DOMAIN, BOILERPLATE_CANDIDATE_TOKEN } from 'config'

const apiClient = axios.create({
  baseURL: API_DOMAIN,
})

apiClient.interceptors.request.use((request) => {
  if (request.headers) {
    request.headers.Authorization = BOILERPLATE_CANDIDATE_TOKEN
  }

  return request
})

export default apiClient
