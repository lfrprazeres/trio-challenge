import { Box, Button, ButtonProps, styled, Typography, TypographyProps } from '@mui/material'
import LocationOnOutlined from '@mui/icons-material/LocationOnOutlined'

export const Container = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  flex: 1,
  width: '100%',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  position: 'relative',
  height: 275,
  left: 0,
  top: 0,
  padding: '44px 100px',
  borderBottomLeftRadius: theme.shape.borderRadius,
  borderBottomRightRadius: theme.shape.borderRadius,
  marginBottom: -180,
}))

export const Icon = styled(LocationOnOutlined)(({ theme }) => ({
  color: theme.palette.common.white,
}))

export const Actions = styled(Box)(() => ({
  display: 'flex',
  flex: 1,
  justifyContent: 'flex-end',
  alignItems: 'center',
}))

export const Title = styled(Typography)<TypographyProps>(({ theme }) => ({
  color: theme.palette.common.white,
  textTransform: 'none',
  fontSize: 48,
  fontWeight: 'bold',
}))

export const LoginButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.common.white,
  borderRadius: 16,
  textTransform: 'none',
  fontSize: 16,
  margin: '0 30px',

  '&:hover': {
    color: theme.palette.primary.light,
  },
}))

export const SignUpButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.common.black,
  borderRadius: 16,
  textTransform: 'none',
  fontSize: 16,
  padding: '14px 20px',

  '&:hover': {
    backgroundColor: theme.palette.primary.light,
  },
}))
