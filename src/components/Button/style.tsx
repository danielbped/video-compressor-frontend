import styled from "styled-components"

const StyledButton = styled.button<{ width?: number, backgroundColor?: string, color?: string }>`
  border: none;
  padding: 1rem;
  color: ${props => props.color ? props.color : '#ffffff'};
  background-color: ${props => props.backgroundColor ? props.backgroundColor : '#005ae1'};
  margin-bottom: 1rem;
  margin-right: 1rem;
  font-weight: bold;
  border-radius: 1rem;
  width: ${props => props.width ? `${props.width}%` : '100%'};
  
  &:hover {
    cursor: pointer;
    color: white;
    background-color: #333333;
    transition: all.3s ease-in-out;
  }

  &:disabled {
    cursor: not-allowed;

    &:hover {
      background-color: #FFF;
      color: #1E1E1E;
    }
  }
`

export {
  StyledButton,
}