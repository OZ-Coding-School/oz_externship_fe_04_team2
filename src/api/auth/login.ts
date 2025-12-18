import { API_BASE_URL, API_PATHS } from '@/constants'
import axios from 'axios'

const refreshClient = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: { 'Content-Type': 'application/json' },
})

export const refreshAccessToken = () => {
  return refreshClient.post(API_PATHS.USER.REFRESH_TOKEN, {})
}
