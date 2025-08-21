import { useQuery } from "@tanstack/react-query"
import axios, { AxiosResponse } from "axios"
import { File } from "../interfaces/file-data.interface"
import { LoginResponse } from "../interfaces/login-data.interface"

const { VITE_API_URL } = import.meta.env

const fetchData = async (token: LoginResponse | null): Promise<AxiosResponse<File[]> | null> => {
  if (token) {
    const response = await axios.get<File[]>(VITE_API_URL + `/api/videos`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response
  } else {
    return null
  }
}

const useFileData = (token: LoginResponse | null) => {
  const query = useQuery<AxiosResponse<File[]> | null, Error>({
    queryKey: ['file-data'],
    queryFn: () => fetchData(token),
    enabled: !!token,
  })

  return {
    ...query,
    data: query.data?.data ?? []
  }
}

export default useFileData