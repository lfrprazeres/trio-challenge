import { Box, Divider, Typography } from '@mui/material'
import BikeImageSelector from 'components/BikeImageSelector'
import BikeSpecs from 'components/BikeSpecs'
import BikeType from 'components/BikeType'
import BookingAddressMap from 'components/BookingAddressMap'

import { PriceRow } from '../BikeDetails.styles'
import {
  Container,
  FavoriteIcon,
  LikeButton,
} from './DetailsContainer.styles'
import { memo } from 'react'
import useBikeContext from '../BikeDetails.context'

const DetailsContainer = () => {
  const {
    imageUrls,
    bodySize,
    maxLoad,
    ratings,
    name,
    type,
    description,
    rateByDay,
    rateByWeek
  } = useBikeContext()

  return (
    <Container variant='outlined' data-testid='bike-details-container'>
      {!!imageUrls && <BikeImageSelector imageUrls={imageUrls} />}

      <BikeSpecs bodySize={bodySize} maxLoad={maxLoad} ratings={ratings} />

      <Divider />

      <Box marginY={2.25}>
        <Box display='flex' alignItems='center' justifyContent='space-between'>
          <div>
            <Typography
              variant='h1'
              fontSize={38}
              fontWeight={800}
              marginBottom={0.5}
              data-testid='bike-name-details'
            >
              {name}
            </Typography>

            <BikeType type={type} />
          </div>

          <LikeButton>
            <FavoriteIcon />
          </LikeButton>
        </Box>

        <Typography marginTop={1.5} fontSize={14}>
          {description}
        </Typography>
      </Box>

      <Divider />

      <Box marginY={2.25} data-testid='bike-prices-details'>
        <PriceRow>
          <Typography>Day</Typography>
          <Typography fontWeight={800} fontSize={24} letterSpacing={1}>
            {rateByDay} €
          </Typography>
        </PriceRow>

        <PriceRow>
          <Typography>Week</Typography>
          <Typography fontWeight={800} fontSize={24} letterSpacing={1}>
            {rateByWeek} €
          </Typography>
        </PriceRow>
      </Box>

      <Divider />

      <Box marginTop={3.25}>
        <Typography variant='h1' fontSize={24} fontWeight={800}>
          Full adress after booking
        </Typography>

        <BookingAddressMap />
      </Box>
    </Container>
  )
}

export default memo(DetailsContainer)