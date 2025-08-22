import { type MouseEventHandler } from "react"
import { type ChangeEventHandler } from "react"
import { FileToUpload } from "./file-data.interface"

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
  width?: number
  color?: string
  backgroundColor?: string
}

export interface ErrorMessageProps {
  message: string
}

export interface HeaderProps {
  user?: {
    firstName: string
    lastName: string
  }
  handleLogout?: MouseEventHandler<HTMLButtonElement>
}

export interface LoginFormInterface {
  handleLogin: ChangeEventHandler<HTMLInputElement>
  handleNavigate: (route: string) => void
  submit: () => void
  isError: boolean
  error: string
  handleKeyPress: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

export interface SocialIconProps {
  iconUrl: string
  alt: string
  link: string
}

export interface FileToUploadWithProgress extends FileToUpload {
  isUploading?: boolean;
  progress?: number;
}