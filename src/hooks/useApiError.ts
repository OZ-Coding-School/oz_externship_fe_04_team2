import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { ApiError } from '@/utils'

const LOGIN_URL = 'https://account.ozcoding.site/login'

export function useApiError(error: unknown) {
  const navigate = useNavigate()

  useEffect(() => {
    if (!(error instanceof ApiError)) return

    if (error.status === 401) {
      toast.error('로그인이 필요합니다')
      window.location.replace(LOGIN_URL)
      return
    }

    if (error.status === 403) {
      toast.error('접근 권한이 없습니다')
      navigate(-1)
    }

    if (error.status === 404) {
      navigate('/error/404', { replace: true })
      return
    }

    if (error.status >= 500) {
      navigate('/error/500', { replace: true })
    }

    navigate('/error', { replace: true })
  }, [error, navigate])
}
