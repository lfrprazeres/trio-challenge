import { Box, BoxProps, styled } from '@mui/material'

export const Container = styled(Box)<BoxProps>(() => ({
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  justifyContent: 'center'
}))

export const ImageContainer = styled(Box)<BoxProps>(() => ({
  height: 100,
  width: 164
}))