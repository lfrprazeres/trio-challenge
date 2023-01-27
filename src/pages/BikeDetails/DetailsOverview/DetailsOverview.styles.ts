import { Button, ButtonProps, Card, CardProps } from '@mui/material'
import { styled } from '@mui/system'

export const Container = styled(Card, {
  shouldForwardProp: (prop) => prop !== 'isRentSucceed',
})<CardProps & { isRentSucceed: boolean }>(({ theme, isRentSucceed }) => ({
  borderColor: theme.palette.grey[500],
  padding: 34,
  [theme.breakpoints.down('sm')]: {
    padding: '35px 15px',
  },
  maxHeight: isRentSucceed ? 450 : 770
}))

export const BookingButton = styled(Button)<ButtonProps>(({ theme }) => ({
  borderRadius: 20,
  padding: '18px 0',
  marginTop: 30,
  textTransform: 'none',
  color: theme.palette.common.white,
  fontWeight: 800,
}))