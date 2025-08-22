import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import DeleteButton from '../../components/DeleteButton'

describe('DeleteButton Component', () => {
  it('renders delete button', () => {
    const mockOnRemove = jest.fn()
    render(<DeleteButton onRemove={mockOnRemove} />)
    
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('renders Trash2 icon', () => {
    const mockOnRemove = jest.fn()
    const { container } = render(<DeleteButton onRemove={mockOnRemove} />)
    
    const trashIcon = container.querySelector('svg')
    expect(trashIcon).toBeInTheDocument()
  })

  it('calls onRemove when clicked', () => {
    const mockOnRemove = jest.fn()
    render(<DeleteButton onRemove={mockOnRemove} />)
    
    fireEvent.click(screen.getByRole('button'))
    expect(mockOnRemove).toHaveBeenCalledTimes(1)
  })

  it('applies correct styling to inner div', () => {
    const mockOnRemove = jest.fn()
    const { container } = render(<DeleteButton onRemove={mockOnRemove} />)
    
    const innerDiv = container.querySelector('div[style*="display: flex"]')
    expect(innerDiv).toHaveStyle({
      display: 'flex',
      alignItems: 'center',
      gap: '0.4rem'
    })
  })

  it('renders Trash2 icon with correct size', () => {
    const mockOnRemove = jest.fn()
    const { container } = render(<DeleteButton onRemove={mockOnRemove} />)
    
    const trashIcon = container.querySelector('svg')
    expect(trashIcon).toHaveAttribute('width', '16')
    expect(trashIcon).toHaveAttribute('height', '16')
  })
})
