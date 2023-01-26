import { Dispatch, SetStateAction } from 'react'
import { Box, CircularProgress, Divider, Typography } from '@mui/material'

import Amount from 'models/Amount'

import { BookingButton, Container } from './DetailsOverview.styles'
import DatePickerRange, { DateRange } from 'components/DateRangePicker'
import { InfoIcon, PriceRow } from '../BikeDetails.styles'
import useBikeContext from '../BikeDetails.context'
import FormHelperText from '@mui/material/FormHelperText'

interface DetailsOverviewProps extends Amount {
  rentRange: DateRange,
  setRentRange: Dispatch<SetStateAction<DateRange>>,
  isError: boolean
  isLoading: boolean
}

const DetailsOverview = ({ rentRange, setRentRange, rentAmount, fee, totalAmount, isError, isLoading }: DetailsOverviewProps) => {
  const { rateByDay, servicesFee, total } = useBikeContext()

  return (
    <Container variant='outlined' data-testid='bike-overview-container'>
      <Typography variant='h1' fontSize={24} fontWeight={800} mb={1} pl={0}>
        Select date and time
      </Typography>
      <Box display='flex' justifyContent='center'>
        <DatePickerRange value={rentRange} onChange={setRentRange} />
      </Box>
      <Typography variant='h2' fontSize={16} mb={1.25} mt={2.75}>
        Booking Overview
      </Typography>

      <Divider />

      <PriceRow marginTop={1.75} data-testid='bike-overview-single-price'>
        <Box display='flex' alignItems='center'>
          <Typography marginRight={1}>Subtotal</Typography>
          <InfoIcon fontSize='small' />
        </Box>

        <Typography>
          {isLoading && <CircularProgress size={12} />}
          {!isError && !isLoading && (rentAmount || rateByDay)} €
        </Typography>
      </PriceRow>

      <PriceRow marginTop={1.5} data-testid='bike-overview-single-price'>
        <Box display='flex' alignItems='center'>
          <Typography marginRight={1}>Service Fee</Typography>
          <InfoIcon fontSize='small' />
        </Box>

        <Typography>
          {isLoading && <CircularProgress size={12} />}
          {!isError && !isLoading && (fee || servicesFee)} €
        </Typography>
      </PriceRow>

      <PriceRow marginTop={1.75} data-testid='bike-overview-total'>
        <Typography fontWeight={800} fontSize={16}>
          Total
        </Typography>
        <Typography variant='h2' fontSize={24} letterSpacing={1}>
          {isLoading && <CircularProgress size={12} />}
          {!isError && !isLoading && (totalAmount || total)}€
        </Typography>
      </PriceRow>
      {isError && <FormHelperText error={isError}> Please select a valid date range </FormHelperText>}

      <BookingButton
        disabled={isError || isLoading}
        fullWidth
        disableElevation
        variant='contained'
        data-testid='bike-booking-button'
      >
        Add to booking
      </BookingButton>
    </Container>
  )
}

export default DetailsOverview