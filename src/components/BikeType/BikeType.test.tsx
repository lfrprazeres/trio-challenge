import { render, screen } from '@testing-library/react'
import { mockedBike } from 'mocks/Bike'
import BikeType from '.'

describe('BikeType component', () => {
  beforeEach(() => {
    render(<BikeType type={mockedBike.type} />)
  })

  it('should has the bike type', () => {
    const typeElement = screen.getByTestId('bike-type')
    expect(typeElement).toBeInTheDocument()
  })
})
