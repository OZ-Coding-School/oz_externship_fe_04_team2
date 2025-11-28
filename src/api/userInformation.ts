import { axiosInstance } from '@/api/axios'
import { API_PATHS } from '@/constants'
import type { UserInformation } from '@/types/userInformation'

export const getUserInformationApi = async (): Promise<UserInformation[]> => {
  const { data } = await axiosInstance.get(API_PATHS.USER.GET)
  return data
}
