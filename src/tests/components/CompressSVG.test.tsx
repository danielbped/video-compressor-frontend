import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import CompressSVG from '../../components/CompressSVG'

// Mock the SVG import
jest.mock('../../assets/compress-image.svg', () => 'mocked-compress-image.svg')

describe('CompressSVG Component', () => {
  it('renders image with correct src and alt attributes', () => {
    render(<CompressSVG />)
    
    const image = screen.getByRole('img', { name: 'Compress SVG' })
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute('alt', 'Compress SVG')
  })

  it('renders StyledImage component', () => {
    const { container } = render(<CompressSVG />)
    
    expect(container.firstChild).toBeInTheDocument()
  })
})
