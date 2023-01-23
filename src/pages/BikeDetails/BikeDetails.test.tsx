import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { mockedBike } from 'mocks/Bike'
import { SERVICE_FEE_PERCENTAGE } from './BikeDetails.contants'
import { getServicesFee } from './BikeDetails.utils'
import BikeDetails from './BikeDetails.component'

describe('BikeDetails page', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <BikeDetails bike={mockedBike} />
      </BrowserRouter>,
    )
  })

  it('should has a header', () => {
    const headerElement = screen.getByTestId('header')
    expect(headerElement).toBeInTheDocument()
  })

  it('should has breadcrumbs', () => {
    const breadcrumbsElement = screen.getByTestId('bike-details-breadcrumbs')
    expect(breadcrumbsElement).toBeInTheDocument()
  })

  it('should has the details container with the image selector, bike name, prices and a map', () => {
    const detailsContainerElement = screen.getByTestId('bike-details-container')
    expect(detailsContainerElement).toBeInTheDocument()

    const imageSelectorElement = screen.getByTestId('bike-image-selector')
    expect(imageSelectorElement).toBeInTheDocument()

    const nameElement = screen.getByTestId('bike-name-details')
    expect(nameElement).toBeInTheDocument()

    const pricesElement = screen.getByTestId('bike-prices-details')
    expect(pricesElement).toBeInTheDocument()

    const mapElement = screen.getByTestId('booking-address-map')
    expect(mapElement).toBeInTheDocument()
  })

  it('should has the overview container with the prices, total and booking button', () => {
    const overviewContainerElement = screen.getByTestId('bike-overview-container')
    expect(overviewContainerElement).toBeInTheDocument()

    const pricesElements = screen.getAllByTestId('bike-overview-single-price')
    expect(pricesElements).not.toBeNull()
    expect(pricesElements.length).toBe(2)

    const totalElement = screen.getByTestId('bike-overview-total')
    expect(totalElement).toBeInTheDocument()

    const bookingButtonElement = screen.getByTestId('bike-booking-button')
    expect(bookingButtonElement).toBeInTheDocument()
  })
})

describe('BikeDetails utils', () => {
  it('should gets the services fee properly', () => {
    const amount = 100
    const expectedAmount = amount * SERVICE_FEE_PERCENTAGE

    const result = getServicesFee(amount)
    expect(result).toEqual(expectedAmount)
  })
})
