import { Box, styled } from '@mui/material'

export const Content = styled(Box)(({ theme }) => ({
  padding: '0 100px 44px',
  position: 'relative',

  [theme.breakpoints.down('md')]: {
    padding: '8vw',
  },
}))
