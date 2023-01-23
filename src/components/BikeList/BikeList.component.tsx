import Bike from 'models/Bike'
import { getQuantityLabel } from './BikeList.utils'
import BikeCard from 'components/BikeCard'
import { Container, ListContainer, QuantityContainer } from './BikeList.styles'
import { Typography } from '@mui/material'

interface BikeListProps {
  bikes: Bike[]
}

const BikeList = ({ bikes }: BikeListProps) => {
  const quantityLabel = getQuantityLabel(bikes.length)

  return (
    <Container data-testid='bikes-list'>
      <QuantityContainer className='list-quantity-container'>
        <Typography color='primary.light' data-testid='list-quantity'>
          {quantityLabel}
        </Typography>
      </QuantityContainer>

      <ListContainer>
        {bikes.map((bike) => (
          <BikeCard key={bike.id} bike={bike} />
        ))}
      </ListContainer>
    </Container>
  )
}

export default BikeList
