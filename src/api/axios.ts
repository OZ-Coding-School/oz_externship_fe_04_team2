import { API_BASE_URL } from '@/constants'
import axios from 'axios'

const IS_DEV = import.meta.env.MODE === 'development'

export const axiosInstance = axios.create({
  baseURL: IS_DEV ? '' : API_BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})
