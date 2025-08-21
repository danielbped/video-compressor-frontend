import { type ButtonProps } from "../../interfaces/components.interface"
import { StyledButton } from "./style"

const Button = (props: ButtonProps) => {
  return (
    <StyledButton
      onClick={ (e: any) => props.onClick(e) }
      disabled={ props.disabled }
      width={ props.width }
      color={ props.color }
      backgroundColor={ props.backgroundColor }
    >
      {props.title}
    </StyledButton>
  )
}

export default Button