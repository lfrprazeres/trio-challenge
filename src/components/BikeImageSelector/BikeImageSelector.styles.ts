import { Box, styled, BoxProps } from '@mui/material'

interface BikeImageProps extends BoxProps {
  isLoaded: boolean
}

export const Container = styled(Box)<BoxProps>(({ theme }) => ({
  marginBottom: 30,
  display: 'grid',
  gridTemplateColumns: '100px 1fr',
  gap: 32,

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
  },
}))

export const BikeImage = styled('img', {
  shouldForwardProp: (prop) => prop !== 'isLoaded',
})<BikeImageProps>(({ isLoaded }) => ({
  display: isLoaded ? 'block' : 'none',
}))
