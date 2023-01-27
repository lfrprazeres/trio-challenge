import { ThemeProvider } from '@mui/system'
import { BrowserRouter } from 'react-router-dom'
import { AdapterDateFns } from '@mui/x-date-pickers-pro/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers-pro'

import theme from 'styles/theme'
import AppRoutes from './app.routes'


const App = () => {
  return (
    <BrowserRouter>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <ThemeProvider theme={theme}>
          <AppRoutes />
        </ThemeProvider>
      </LocalizationProvider>
    </BrowserRouter>
  )
}

export default App
