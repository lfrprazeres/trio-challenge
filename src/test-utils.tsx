import { PropsWithChildren, ReactElement } from 'react'
import { ThemeProvider } from '@mui/system'

import { render, RenderOptions } from '@testing-library/react'
import { AdapterDateFns } from '@mui/x-date-pickers-pro/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers-pro'
import theme from 'styles/theme'

const AllTheProviders = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        {children}
      </LocalizationProvider>
    </ThemeProvider>
  )
}

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'

export { customRender as render }