import { Box, styled, BoxProps } from '@mui/material'

export const Container = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 14,
  },
}))
