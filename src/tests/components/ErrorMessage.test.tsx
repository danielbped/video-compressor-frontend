import { render, screen } from '@testing-library/react'
import ErrorMessage from '../../components/ErrorMessage'

describe('ErrorMessage', () => {
  it('should render error message text', () => {
    const errorMessage = 'This is an error message'
    
    render(<ErrorMessage message={errorMessage} />)
    
    expect(screen.getByText(errorMessage)).toBeInTheDocument()
  })

  it('should render with StyledErrorMessage component', () => {
    const errorMessage = 'Error occurred'
    
    const { container } = render(<ErrorMessage message={errorMessage} />)
    
    expect(container.firstChild).toHaveTextContent(errorMessage)
  })
})
