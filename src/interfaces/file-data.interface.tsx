import { LoginResponse } from "./login-data.interface"
import { User } from "./user-data.interface"

export interface File {
  id: string
  user: User
  compressed_url: string
  original_url: string
  original_filename: string
  compressed_filename: string
  original_size: number
  compressed_size: number
  compression_percentage: number
  createdAt: Date
  updatedAt: Date
}

export interface DroppingAreaProps {
  isDragging: boolean;
}

export interface FileResponse {
  data: File[]
}

export interface NewFileData {
  files: FileToUpload[],
  token: LoginResponse | null
}

export interface DeleteFileData {
  file: string, token: LoginResponse | null
}

export interface FileData extends File {}

export interface FileToUpload {
  lastModified: number
  lastModifiedDate: Date
  name: string
  size: number
  type: string
  webkitRelativePath: string
}