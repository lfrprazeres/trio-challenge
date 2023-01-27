import { AxiosResponse } from 'axios'
import apiClient from './api'
import { USER_ID } from 'config'
import { BikeRentReturn } from 'models/Bike'

interface HandleRentParams {
  bikeId?: number,
  dateFrom?: string | null,
  dateTo?: string | null
}

const bikeServices = {
  rent: async ({ bikeId = 0, dateFrom = '', dateTo = '' }: HandleRentParams) => {
    const response: AxiosResponse<BikeRentReturn> = await apiClient.post('/bikes/rent', {
      bikeId,
      userId: Number(USER_ID),
      dateFrom,
      dateTo
    })

    return response.data
  }
}

export default bikeServices