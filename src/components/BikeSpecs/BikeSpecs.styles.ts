import { Card, CardProps, styled, Typography, TypographyProps } from '@mui/material'

export const Container = styled(Card)<CardProps>(({ theme }) => ({
  borderColor: theme.palette.grey[500],
  display: 'flex',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: 20,
  padding: '15px 85px',
  marginBottom: 18,

  [theme.breakpoints.down('md')]: {
    padding: 20,
  },
}))

export const SpecTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: theme.palette.common.black,
  fontSize: 14,
}))

export const SpecText = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: theme.palette.common.black,
  fontSize: 16,
  fontWeight: 800,
}))
