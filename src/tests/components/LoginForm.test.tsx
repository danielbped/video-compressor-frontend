import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LoginForm from '../../components/LoginForm'

describe('LoginForm', () => {
  const mockProps = {
    handleLogin: jest.fn(),
    handleKeyPress: jest.fn(),
    submit: jest.fn(),
    handleNavigate: jest.fn(),
    isError: false,
    error: ''
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should render login form title', () => {
    render(<LoginForm {...mockProps} />)
    
    expect(screen.getByText('Login')).toBeInTheDocument()
  })

  it('should render login button', () => {
    render(<LoginForm {...mockProps} />)
    
    expect(screen.getByText('Entrar')).toBeInTheDocument()
  })

  it('should render register CTA', () => {
    render(<LoginForm {...mockProps} />)
    
    expect(screen.getByText('Não possui conta?')).toBeInTheDocument()
    expect(screen.getByText('Registrar')).toBeInTheDocument()
  })

  it('should call submit when login button is clicked', async () => {
    const user = userEvent.setup()
    render(<LoginForm {...mockProps} />)
    
    const loginButton = screen.getByText('Entrar')
    await user.click(loginButton)
    
    expect(mockProps.submit).toHaveBeenCalledTimes(1)
  })

  it('should call handleNavigate when register link is clicked', async () => {
    const user = userEvent.setup()
    render(<LoginForm {...mockProps} />)
    
    const registerLink = screen.getByText('Registrar')
    await user.click(registerLink)
    
    expect(mockProps.handleNavigate).toHaveBeenCalledWith('register')
  })

  it('should show error message when isError is true', () => {
    const propsWithError = {
      ...mockProps,
      isError: true,
      error: 'Invalid credentials'
    }
    
    render(<LoginForm {...propsWithError} />)
    
    expect(screen.getByText('Invalid credentials')).toBeInTheDocument()
  })

  it('should not show error message when isError is false', () => {
    render(<LoginForm {...mockProps} />)
    
    expect(screen.queryByText('Invalid credentials')).not.toBeInTheDocument()
  })

  it('should hide error message after 5 seconds', async () => {
    jest.useFakeTimers()
    
    const propsWithError = {
      ...mockProps,
      isError: true,
      error: 'Invalid credentials'
    }
    
    render(<LoginForm {...propsWithError} />)
    
    expect(screen.getByText('Invalid credentials')).toBeInTheDocument()
    
    jest.advanceTimersByTime(5000)
    
    await waitFor(() => {
      expect(screen.queryByText('Invalid credentials')).not.toBeInTheDocument()
    })
    
    jest.useRealTimers()
  })

  it('should show error message again when isError prop changes from false to true', () => {
    const { rerender } = render(<LoginForm {...mockProps} />)
    
    expect(screen.queryByText('Login failed')).not.toBeInTheDocument()
    
    rerender(<LoginForm {...mockProps} isError={true} error="Login failed" />)
    
    expect(screen.getByText('Login failed')).toBeInTheDocument()
  })
})
