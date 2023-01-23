import { Divider } from '@mui/material'
import { Container, SpecText, SpecTitle } from './BikeSpecs.styles'

interface BikeSpecsProps {
  bodySize?: number
  maxLoad?: number
  ratings?: number
}

const BikeSpecs = ({ bodySize, maxLoad, ratings }: BikeSpecsProps) => {
  return (
    <Container variant='outlined' data-testid='bike-specs'>
      <div data-testid='bike-body-size'>
        <SpecTitle>Body size</SpecTitle>
        <SpecText>{bodySize} cm</SpecText>
      </div>

      <Divider orientation='vertical' flexItem />

      <div data-testid='bike-max-load'>
        <SpecTitle>Max load</SpecTitle>
        <SpecText>{maxLoad} kg</SpecText>
      </div>

      <Divider orientation='vertical' flexItem />

      <div data-testid='bike-ratings'>
        <SpecTitle>Rating</SpecTitle>
        <SpecText>{ratings}</SpecText>
      </div>
    </Container>
  )
}

export default BikeSpecs
