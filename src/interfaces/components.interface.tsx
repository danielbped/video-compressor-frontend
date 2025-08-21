import { type MouseEventHandler } from "react"
import { type ChangeEventHandler } from "react"

export interface RegisterFormInterface {
  handleRegister: ChangeEventHandler<HTMLInputElement>
  handleNavigate: (route: string) => void
  submit: () => void
  isError: boolean
  error: string
  disabledButton: boolean
}

export interface InputProps {
  type: string
  name: string
  placeholder: string
  title: string
  onChange: ChangeEventHandler<HTMLInputElement>
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

export interface ButtonProps {
  title: string
  onClick: MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
}

export interface ErrorMessageProps {
  message: string
}

export interface LoginFormInterface {
  handleLogin: ChangeEventHandler<HTMLInputElement>
  handleNavigate: (route: string) => void
  submit: () => void
  isError: boolean
  error: string
  handleKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void
}