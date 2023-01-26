import { useEffect, useState } from 'react'
import Snackbar from '@mui/material/Snackbar'

import Amount, { AmountError } from 'models/Amount'
import amountServices from 'services/amount'
import { DateRange } from 'components/DateRangePicker'

import useBikeContext from '../BikeDetails.context'
import DetailsOverview from './DetailsOverview.component'
import { Alert } from '@mui/material'
import { AxiosError } from 'axios'

const DetailsOverviewContainer = () => {
  const { id } = useBikeContext()
  const [rentRange, setRentRange] = useState<DateRange>([undefined, undefined])
  const [snackbarData, setSnackbarData] = useState({ message: '', open: false })
  const [amountAndFees, setAmountAndFees] = useState<Amount>({ rentAmount: 0, fee: 0, totalAmount: 0 })
  const [fetchError, setFetchError] = useState(false)

  const handleCloseSnackbar = () => setSnackbarData({ message: '', open: false })

  const handleOpenSnackbar = (message: string) => setSnackbarData({ message, open: true })

  const getAmountAndFees = async () => {
    const [dateFrom, dateTo] = rentRange
    if (id && dateTo) {
      try {
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
        setFetchError(true)
        const { response } = error as AxiosError<AmountError>
        if (response?.data.errorType === 'InvalidDatesError') handleOpenSnackbar('Bike not available in the given date range')
      } 
    }
  }

  useEffect(() => {
    setFetchError(false)
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
      <DetailsOverview
        rentError={fetchError}
        rentRange={rentRange}
        setRentRange={setRentRange}
        {...amountAndFees}
      />
    </>
  )
}

export default DetailsOverviewContainer