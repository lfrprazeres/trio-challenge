import { Chip } from '@mui/material'

interface BikeTypeProps {
  type?: string
}

const BikeType = ({ type }: BikeTypeProps) => {
  return <Chip color='secondary' data-testid='bike-type' label={type} />
}

export default BikeType
