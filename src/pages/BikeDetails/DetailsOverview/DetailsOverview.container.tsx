import { Suspense, lazy, useEffect, useState } from 'react'
import Snackbar from '@mui/material/Snackbar'
import Fade from '@mui/material/Fade'

import Amount from 'models/Amount'
import amountServices from 'services/amount'
import { DateRange } from 'components/DateRangePicker'

import useBikeContext from '../BikeDetails.context'
import DetailsOverview from './DetailsOverview.component'
import { Alert, CircularProgress } from '@mui/material'
import { AxiosError } from 'axios'
import bikeServices from 'services/bike'
import { Container } from './DetailsOverview.styles'

const RentCompleted = lazy(() => import('./RentCompleted'))

const DetailsOverviewContainer = () => {
  const { id } = useBikeContext()
  const [rentRange, setRentRange] = useState<DateRange>([undefined, undefined])
  const [snackbarData, setSnackbarData] = useState({ message: '', open: false })
  const [amountAndFees, setAmountAndFees] = useState<Amount>({ rentAmount: 0, fee: 0, totalAmount: 0 })
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const [isRenting, setIsRenting] = useState(false)
  const [isRentSucceed, setIsRentSucceed] = useState(false)

  const handleCloseSnackbar = () => setSnackbarData({ message: '', open: false })

  const handleOpenSnackbar = (message?: string) => {
    setSnackbarData({
      message: message || 'Something wrong happened',
      open: true
    })
  }

  const getAmountAndFees = async () => {
    const [dateFrom, dateTo] = rentRange
    if (id && dateTo) {
      try {
        setIsLoading(true)
        const amountAndFees = await amountServices.getAmount({
          bikeId: id,
          dateFrom,
          dateTo
        })

        setAmountAndFees({
          fee: Math.floor(amountAndFees.fee),
          rentAmount: Math.floor(amountAndFees.rentAmount),
          totalAmount: Math.floor(amountAndFees.totalAmount)
        })
      } catch (error) {
        setIsError(true)
        const { response } = error as AxiosError<{ message: string }>
        handleOpenSnackbar(response?.data.message)
      } finally {
        setIsLoading(false)
      }
    }
  }

  const rentBike = async () => {
    try {
      const [dateFrom, dateTo] = rentRange
      setIsRenting(true)
      await bikeServices.rent({
        bikeId: id,
        dateFrom,
        dateTo
      })
      setIsRentSucceed(true)
    } catch (error) {
      const { response } = error as AxiosError<{ message: string }>
      handleOpenSnackbar(response?.data.message)
    } finally {
      setIsRenting(false)
    }
  }

  useEffect(() => {
    setIsError(false)
    getAmountAndFees()
  }, [rentRange, id])

  return (
    <>
      <Snackbar
        open={snackbarData.open}
        onClose={handleCloseSnackbar}
        message="Note archived"
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert onClose={handleCloseSnackbar} severity="error">
          {snackbarData.message}
        </Alert>
      </Snackbar>
      <Container variant='outlined' data-testid='bike-overview-container' isRentSucceed={isRentSucceed}>
        {!isRentSucceed
          ? (
            <DetailsOverview
              isLoading={isLoading}
              isError={isError}
              rentRange={rentRange}
              setRentRange={setRentRange}
              isRenting={isRenting}
              handleRent={rentBike}
              {...amountAndFees}
            />
          )
          : (

            <Suspense fallback={<CircularProgress />}>
              <RentCompleted />
            </Suspense>
          )
        }
      </Container>
    </>
  )
}

export default DetailsOverviewContainer