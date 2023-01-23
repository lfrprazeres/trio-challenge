import { render, screen } from '@testing-library/react'
import BookingAddressMap from '.'

describe('BookingAddressMap component', () => {
  beforeEach(() => {
    render(<BookingAddressMap />)
  })

  it('should has the booking address map', () => {
    const mapElement = screen.getByTestId('map')
    expect(mapElement).toBeInTheDocument()
  })
})
