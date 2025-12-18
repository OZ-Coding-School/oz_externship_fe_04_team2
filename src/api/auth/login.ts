import { API_BASE_URL, API_PATHS } from '@/constants'
import axios from 'axios'

const IS_DEV = import.meta.env.MODE === 'development'

const refreshClient = axios.create({
  baseURL: IS_DEV ? '' : API_BASE_URL,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
})

export const refreshAccessToken = () => {
  return refreshClient.post(API_PATHS.USER.REFRESH_TOKEN, {})
}
