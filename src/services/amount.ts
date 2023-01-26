import { USER_ID } from 'config'
import apiClient from './api'
import { formatDate } from 'utils/date'
import Amount from 'models/Amount'
import { AxiosResponse } from 'axios'

interface HandleAmountParams {
  bikeId?: number,
  dateFrom?: string | null,
  dateTo?: string | null
}

interface Params extends HandleAmountParams {
  userId: number  
}

const amountServices = {
  getAmount: async ({ bikeId, dateFrom, dateTo }: HandleAmountParams): Promise<Amount> => {
    let params: Params = { bikeId, userId: Number(USER_ID) }
    
    if (!!dateFrom && !!dateTo) {
      params = { ...params, dateFrom: formatDate(dateFrom), dateTo: formatDate(dateTo) }
    }

    const response: AxiosResponse<Amount> = await apiClient.post('/bikes/amount', params)

    return response.data
  }
}

export default amountServices