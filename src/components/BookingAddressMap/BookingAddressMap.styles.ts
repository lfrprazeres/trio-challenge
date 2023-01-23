import { Box, BoxProps, styled } from '@mui/material'

export const Container = styled(Box)<BoxProps>(() => ({
  position: 'relative',
  textAlign: 'right',
  width: '100%',
  height: 400,
}))

export const MapIframeContainer = styled(Box)<BoxProps>(() => ({
  overflow: 'hidden',
  background: 'none',
  width: '100%',
  borderRadius: 20,
  height: 400,
  marginTop: 20,
}))

export const Map = styled(Box)<BoxProps>(() => ({
  height: 400,
}))
