import { Fade, Typography } from '@mui/material'
import useBikeContext from 'pages/BikeDetails/BikeDetails.context'
import { Container, ImageContainer } from './RentCompleted.styles'
import BikeType from 'components/BikeType'

const RentCompleted = () => {
  const { name, type, imageUrls } = useBikeContext()
  return (
    <Fade in timeout={1000}>
      <Container data-testid='rent-completed-container'>
        <Typography variant='h1' fontSize={24} mb={3}>
          Thank you!
        </Typography>
        <Typography fontSize={16} fontWeight={600} mb={4}>
          Your bike is booked.
        </Typography>
        <ImageContainer mb={2}>
          <img
            src={imageUrls?.[0]}
            width='100%'
            height='100%'
            alt="Bigger bike's image Placeholder"
          />
        </ImageContainer>
        <Typography variant='h2' fontSize={18} fontWeight={700}>
          {name}
        </Typography>
        <BikeType type={type} />
      </Container>
    </Fade>
  )
}

export default RentCompleted