import { refreshAccessToken } from '@/api/auth/login'
import { API_BASE_URL, EXTERNAL_LINKS } from '@/constants'
import { LoginStateStore } from '@/store'
import AuthStateStore from '@/store/authStateStore'
import axios from 'axios'

const IS_DEV = import.meta.env.MODE === 'development'

export const axiosInstance = axios.create({
  baseURL: IS_DEV ? '' : API_BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
})

// 요청 시 accessToken이 있으면 Authorization 헤더에 자동으로 추가
axiosInstance.interceptors.request.use((config) => {
  const token = AuthStateStore.getState().accessToken
  if (token) {
    config.headers = config.headers ?? {}
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    // 401이고 재시도 아닐 때만
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      try {
        // 엑세스 토큰 재발급
        const { data } = await refreshAccessToken()
        const newToken = data.access_token

        AuthStateStore.getState().setAccessToken(newToken)

        originalRequest.headers = originalRequest.headers ?? {}
        originalRequest.headers.Authorization = `Bearer ${newToken}`

        return axiosInstance(originalRequest)
      } catch {
        // 갱신 실패 시 토큰 제거
        AuthStateStore.getState().clearAuth()
        LoginStateStore.getState().setLoginState('GUEST')
        window.location.href = EXTERNAL_LINKS.LOGIN

        return Promise.reject(error)
      }
    }

    if (error.response?.data) {
      return Promise.reject({
        ...error.response.data,
        statusCode: error.response.status,
      })
    }
    return Promise.reject(error)
  }
)
