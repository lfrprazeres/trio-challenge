import { render, screen } from '@testing-library/react'
import Login from './Login.component'

describe('Login page', () => {
  it('should has the container', () => {
    render(<Login />)

    const containerElement = screen.getByTestId('login-page')
    expect(containerElement).toBeInTheDocument()
  })
})
