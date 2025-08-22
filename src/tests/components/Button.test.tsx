import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ButtonProps } from '../../interfaces/components.interface'
import Button from '../../components/Button'

describe('Button Component', () => {
  const defaultProps: ButtonProps = {
    title: 'Test Button',
    onClick: jest.fn(),
    disabled: false,
    width: 100,
    color: '#000',
    backgroundColor: '#fff'
  }

  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('renders button with correct title', () => {
    render(<Button {...defaultProps} />)
    expect(screen.getByText('Test Button')).toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const mockOnClick = jest.fn()
    render(<Button {...defaultProps} onClick={mockOnClick} />)
    
    fireEvent.click(screen.getByText('Test Button'))
    expect(mockOnClick).toHaveBeenCalledTimes(1)
  })

  it('passes event to onClick handler', () => {
    const mockOnClick = jest.fn()
    render(<Button {...defaultProps} onClick={mockOnClick} />)
    
    fireEvent.click(screen.getByText('Test Button'))
    expect(mockOnClick).toHaveBeenCalledWith(expect.any(Object))
  })

  it('renders as disabled when disabled prop is true', () => {
    render(<Button {...defaultProps} disabled={true} />)
    expect(screen.getByText('Test Button')).toBeDisabled()
  })

  it('does not call onClick when disabled', () => {
    const mockOnClick = jest.fn()
    render(<Button {...defaultProps} onClick={mockOnClick} disabled={true} />)
    
    fireEvent.click(screen.getByText('Test Button'))
    expect(mockOnClick).not.toHaveBeenCalled()
  })

  it('applies correct styling props to StyledButton', () => {
    const customProps = {
      ...defaultProps,
      width: 100,
      color: '#ff0000',
      backgroundColor: '#00ff00'
    }
    
    const { container } = render(<Button {...customProps} />)
    const styledButton = container.firstChild
    
    expect(styledButton).toHaveStyle({
      width: "100%",
      color: '#ff0000',
      backgroundColor: '#00ff00'
    })
  })
})
