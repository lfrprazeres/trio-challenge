import { screen, waitFor } from '@testing-library/react'
import { render } from 'test-utils'
import { BrowserRouter } from 'react-router-dom'
import { mockedBike, mockedBikeRentReturn } from 'mocks/Bike'
import BikeDetails from './BikeDetails.component'
import { BikeProvider } from './BikeDetails.context'
import userEvent from '@testing-library/user-event'
import { mockedAmountFailureReturn, mockedAmountReturn } from 'mocks/Amount'
import amountServices from 'services/amount'
import bikeServices from 'services/bike'

jest.mock('services/amount')
jest.mock('services/bike')

const mockedDate = new Date(2000, 9, 1, 7)
global.Date.now = jest.fn(() => mockedDate.getTime())

describe('BikeDetails page', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <BikeProvider externalData={mockedBike}>
          <BikeDetails />
        </BikeProvider>
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

  it('should have the previous month\'s rent disabled and the next rent month enabled', () => {
    const previousMonthButton = screen.getByTestId('date-range-previous-icon-button')
    const nextMonthButton = screen.getByTestId('date-range-next-icon-button')
    expect(previousMonthButton).toBeDisabled()
    expect(nextMonthButton).not.toBeDisabled()
  })

  it('should have the previous day from today disabled', () => {
    const days = screen.getAllByTestId('date-range-day')
    const todayIndex = days.findIndex(element => element.classList.contains('MuiPickersDay-today'))
    expect(days[todayIndex - 1]).toBeDisabled()
  })

  it('should enable "add to booking" button only after the correct range date pick', () => {
    (amountServices.getAmount as jest.Mock).mockResolvedValueOnce(mockedAmountReturn)

    const days = screen.getAllByTestId('date-range-day')
    const todayIndex = days.findIndex(element => element.classList.contains('MuiPickersDay-today'))
    const bookingButton = screen.getByTestId('bike-booking-button')

    expect(bookingButton).toBeDisabled()

    userEvent.click(days[todayIndex]);
    userEvent.click(days[todayIndex + 1]);

    waitFor(() => {
      expect(bookingButton).not.toBeDisabled()
    });
  })

  it('should keep the "add to booking" button disabled and show a helper text on the get amount failure', () => {
    (amountServices.getAmount as jest.Mock).mockRejectedValueOnce(mockedAmountFailureReturn)

    const days = screen.getAllByTestId('date-range-day')
    const todayIndex = days.findIndex(element => element.classList.contains('MuiPickersDay-today'))
    const bookingButton = screen.getByTestId('bike-booking-button')

    userEvent.click(days[todayIndex]);
    userEvent.click(days[todayIndex + 1]);

    waitFor(() => {
      const errorTextElement = screen.getByTestId('bike-overview-error-text')
      expect(errorTextElement.textContent).toBe(mockedAmountFailureReturn.message)
      expect(bookingButton).toBeDisabled()
    });
  })

  it('should complete the rent successfully', async () => {
    (amountServices.getAmount as jest.Mock).mockResolvedValueOnce(mockedAmountReturn)

    const days = screen.getAllByTestId('date-range-day')
    const todayIndex = days.findIndex(element => element.classList.contains('MuiPickersDay-today'))
    const bookingButton = screen.getByTestId('bike-booking-button')

    userEvent.click(days[todayIndex]);
    userEvent.click(days[todayIndex + 1]);

    (bikeServices.rent as jest.Mock).mockResolvedValueOnce(mockedBikeRentReturn)

    await waitFor(() => expect(bookingButton).not.toBeDisabled())

    userEvent.click(bookingButton)

    waitFor(() => {
      const rentCompletedContainer = screen.getByTestId('rent-completed-container')
      expect(rentCompletedContainer).toBeInTheDocument()
    })
  })
})
