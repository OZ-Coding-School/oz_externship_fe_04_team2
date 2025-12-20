import { axiosInstance } from '@/api/axios'
import { API_PATHS } from '@/constants'

type DevLoginResponse = {
  access_token: string
}

export async function devLogin(email: string, password: string) {
  if (!import.meta.env.DEV) {
    throw new Error('devLogin은 개발 환경에서만 사용할 수 있습니다.')
  }

  const res = await axiosInstance.post<DevLoginResponse>(API_PATHS.USER.LOGIN, {
    email,
    password,
  })
  return res.data.access_token
}
