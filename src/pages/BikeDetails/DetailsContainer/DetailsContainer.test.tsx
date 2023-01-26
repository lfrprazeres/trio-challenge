import { SERVICE_FEE_PERCENTAGE } from './DetailsContainer.constants'
import { getServicesFee } from './DetailsContainer.utils'

describe('BikeDetails utils', () => {
  it('should gets the services fee properly', () => {
    const amount = 100
    const expectedAmount = amount * SERVICE_FEE_PERCENTAGE

    const result = getServicesFee(amount)
    expect(result).toEqual(expectedAmount)
  })
})
