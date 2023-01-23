import { render, screen } from '@testing-library/react'
import { mockedBikesArray } from 'mocks/Bike'
import { getQuantityLabel } from './BikeList.utils'
import BikeList from '.'

describe('BikeList component', () => {
  beforeEach(() => {
    render(<BikeList bikes={mockedBikesArray} />)
  })

  it('should has the quantity of bikes in the list', () => {
    const quantityElement = screen.getByTestId('list-quantity')
    expect(quantityElement).toBeInTheDocument()
  })

  it('should displays a list of bikes', async () => {
    const bikeElements = await screen.findAllByTestId('bike-card')
    expect(bikeElements).not.toBeNull()
    expect(bikeElements.length).toBe(mockedBikesArray.length)
  })
})

describe('BikeList utils', () => {
  it('should gets bike quantity label properly', () => {
    let bikeQuantity = 1
    let expectedLabel = '1 bike to rent'

    let result = getQuantityLabel(bikeQuantity)
    expect(result).toEqual(expectedLabel)

    bikeQuantity = 10
    expectedLabel = '10 bikes to rent'

    result = getQuantityLabel(bikeQuantity)
    expect(result).toEqual(expectedLabel)
  })
})
