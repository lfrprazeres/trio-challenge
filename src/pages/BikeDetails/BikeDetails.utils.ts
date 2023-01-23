import { SERVICE_FEE_PERCENTAGE } from './BikeDetails.contants'

export const getServicesFee = (amount: number): number =>
  Math.floor(amount * SERVICE_FEE_PERCENTAGE)
