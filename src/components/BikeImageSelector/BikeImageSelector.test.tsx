import { render, screen } from '@testing-library/react'
import { mockedImageUrls } from 'mocks/Bike'
import BikeImageSelector from '.'

describe('BikeImageSelector component', () => {
  beforeEach(() => {
    render(<BikeImageSelector imageUrls={mockedImageUrls} />)
  })

  it('should has an images list to select', () => {
    const listElement = screen.getByTestId('bike-images-list')
    expect(listElement).toBeInTheDocument()
  })

  it('should has a bigger image selected', () => {
    const imageElement = screen.getByTestId('bike-selected-image')
    expect(imageElement).toBeInTheDocument()
  })
})
