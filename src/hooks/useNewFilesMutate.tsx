import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios, { AxiosPromise } from "axios"
import { FileResponse, NewFileData } from "../interfaces/file-data.interface"

const { VITE_API_URL } = import.meta.env

const newFiles = async (data: NewFileData): Promise<AxiosPromise<FileResponse> | null> => {
  const { files, token } = data
  if (token) {
    const formData = new FormData()

    files.forEach((file) => {
      formData.append("files", file as unknown as File)
    })

    const response = await axios.post<FileResponse>(`${VITE_API_URL}/api/videos`, formData, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  
    return response
  }

  return null
}

const useNewFilesMutate = (onSuccessCallback?: () => void) => {
  const queryClient = useQueryClient()

  const mutate = useMutation({
    mutationFn: async (data: NewFileData) => newFiles(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["file-data"] })
      if (onSuccessCallback) onSuccessCallback();
    },
  })

  return mutate
}

export default useNewFilesMutate