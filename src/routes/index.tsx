import { ThemeProvider } from '@mui/system'
import { BrowserRouter } from 'react-router-dom'
import theme from 'styles/theme'
import AppRoutes from './app.routes'

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
