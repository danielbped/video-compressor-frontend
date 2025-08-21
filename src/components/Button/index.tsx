import { type ButtonProps } from "../../interfaces/components.interface"
import { StyledButton } from "./style"

const Button = (props: ButtonProps) => {
  return (
    <StyledButton
      onClick={ (e: any) => props.onClick(e) }
      disabled={ props.disabled }
    >
      {props.title}
    </StyledButton>
  )
}

export default Button