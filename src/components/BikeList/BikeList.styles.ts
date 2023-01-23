import { Box, styled, BoxProps } from '@mui/material'

export const Container = styled(Box)<BoxProps>(() => ({
  width: '100%',
  marginTop: 45,
}))

export const QuantityContainer = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'flex',
  width: '100%',
  justifyContent: 'flex-end',
  marginBottom: 35,

  [theme.breakpoints.down('md')]: {
    marginBottom: 8,
  },
}))

export const ListContainer = styled(Box)<BoxProps>(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: 25,

  [theme.breakpoints.down('md')]: {
    gridTemplateColumns: '1fr',
  },
}))
