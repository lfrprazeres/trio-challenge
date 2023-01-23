import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Header from '.'

describe('Header component', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    )
  })

  it('should has the app name', () => {
    const titleElement = screen.getByTestId('app-name')
    expect(titleElement).toBeInTheDocument()
  })

  it('should has a location', () => {
    const locationElement = screen.getByTestId('location-label')
    expect(locationElement).toBeInTheDocument()
  })

  it('should has a Log in link', () => {
    const logInElement = screen.getByTestId('login-button')
    expect(logInElement).toBeInTheDocument()
  })

  it('should has a Sign up link', () => {
    const signUpElement = screen.getByTestId('signup-button')
    expect(signUpElement).toBeInTheDocument()
  })
})
