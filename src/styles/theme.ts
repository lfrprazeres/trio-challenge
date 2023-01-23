import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Transitions {
    hover: string
  }

  interface TransitionsOptions {
    hover?: string
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: '#1F49D1',
      light: '#C1CFF2',
      600: '#577CDD',
    },
    secondary: {
      main: '#FFD775',
    },
    grey: {
      500: '#EDEDED',
    },
    common: {
      black: '#1B1B1B',
    },
  },
  typography: {
    fontFamily: [
      'Mont',
      'Roboto',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    h1: {
      fontWeight: 'bold',
    },
    h2: {
      fontWeight: 'bold',
    },
  },
  shape: {
    borderRadius: 30,
  },
  transitions: {
    hover: '0.2s',
  },
})

export default theme
