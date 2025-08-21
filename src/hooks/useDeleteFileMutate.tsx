import { useMutation, useQueryClient } from "@tanstack/react-query"
import axios, { AxiosPromise } from "axios"
import { DeleteFileData } from "../interfaces/file-data.interface"

const { VITE_API_URL } = import.meta.env

const deleteFile = async (data: DeleteFileData): Promise<AxiosPromise<void> | null> => {
  const { file, token } = data
  if (token) {
    const response = await axios.delete<void>(`${VITE_API_URL}/api/videos/${file}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  
    return response
  }

  return null
}

const useDeleteFileMutate = () => {
  const queryClient = useQueryClient()

  const mutate = useMutation({
    mutationFn: async (data: DeleteFileData) => deleteFile(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['file-data'] })
    },
  })

  return mutate
}

export default useDeleteFileMutate