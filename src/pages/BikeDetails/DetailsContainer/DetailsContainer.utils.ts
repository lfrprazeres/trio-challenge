import { SERVICE_FEE_PERCENTAGE } from './DetailsContainer.constants'

export const getServicesFee = (amount: number): number =>
  Math.floor(amount * SERVICE_FEE_PERCENTAGE)
