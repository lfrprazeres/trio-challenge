import { render, screen } from '@testing-library/react'
import { mockedBike } from 'mocks/Bike'
import BikeSpecs from '.'

describe('BikeSpecs component', () => {
  beforeEach(() => {
    render(
      <BikeSpecs
        bodySize={mockedBike?.bodySize}
        maxLoad={mockedBike?.maxLoad}
        ratings={mockedBike?.ratings}
      />,
    )
  })

  it('should has the body size of the bike', () => {
    const bodySizeElement = screen.getByTestId('bike-body-size')
    expect(bodySizeElement).toBeInTheDocument()
  })

  it('should has the max load of the bike', () => {
    const maxLoadElement = screen.getByTestId('bike-max-load')
    expect(maxLoadElement).toBeInTheDocument()
  })

  it('should has the ratings of the bike', () => {
    const ratingsElement = screen.getByTestId('bike-ratings')
    expect(ratingsElement).toBeInTheDocument()
  })
})
