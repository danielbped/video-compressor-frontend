import { render, screen, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Input from '../../components/Input'

describe('Input', () => {
  const mockOnChange = jest.fn()
  const mockOnKeyDown = jest.fn()

  beforeEach(() => {
    mockOnChange.mockClear()
    mockOnKeyDown.mockClear()
  })

  it('should render input with correct attributes', () => {
    render(
      <Input 
        title="Email"
        type="email"
        name="email"
        placeholder="Enter your email"
        onChange={mockOnChange}
      />
    )
    
    const input = screen.getByRole('textbox')
    expect(input).toHaveAttribute('type', 'email')
    expect(input).toHaveAttribute('name', 'email')
    expect(input).toHaveAttribute('placeholder', 'Enter your email')
  })

  it('should call onChange when input value changes', async () => {
    const user = userEvent.setup()
    render(
      <Input 
        title="Username"
        type="text"
        name="username"
        placeholder="Enter username"
        onChange={mockOnChange}
      />
    )
    
    const input = screen.getByRole('textbox')
    await user.type(input, 'john')
    
    expect(mockOnChange).toHaveBeenCalledTimes(4)
  })

  it('should call onKeyDown when key is pressed', () => {
    render(
      <Input 
        title="Username"
        type="text"
        name="username"
        placeholder="Enter username"
        onChange={mockOnChange}
        onKeyDown={mockOnKeyDown}
      />
    )
    
    const input = screen.getByRole('textbox')
    fireEvent.keyDown(input, { key: 'Enter', code: 'Enter' })
    
    expect(mockOnKeyDown).toHaveBeenCalledTimes(1)
  })

  it('should work without onKeyDown prop', () => {
    render(
      <Input 
        title="Username"
        type="text"
        name="username"
        placeholder="Enter username"
        onChange={mockOnChange}
      />
    )
    
    const input = screen.getByRole('textbox')
    expect(() => fireEvent.keyDown(input, { key: 'Enter' })).not.toThrow()
  })
})
