import { axiosInstance } from '@/api'
import { API_PATHS } from '@/constants/api'

export const logout = async () => {
  await axiosInstance.post(API_PATHS.LOGOUT.POST)
}
