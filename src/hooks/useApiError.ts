import { useEffect, useMemo } from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { ApiError } from '@/utils'

export type ApiErrorAction =
  | { type: 'redirect'; to: string }
  | { type: 'back' }
  | { type: 'render' }

export function useApiError(error: unknown) {
  const navigate = useNavigate()

  const action = useMemo<ApiErrorAction>(() => {
    if (!(error instanceof ApiError)) {
      return { type: 'render' }
    }

    if (error.status === 401) {
      return { type: 'redirect', to: '/login' }
    }

    if (error.status === 403) {
      return { type: 'back' }
    }

    return { type: 'render' }
  }, [error])

  useEffect(() => {
    if (!(error instanceof ApiError)) return

    if (error.status === 401) {
      toast.error('로그인이 필요합니다')
      navigate('/login', { replace: true })
    }

    if (error.status === 403) {
      toast.error('접근 권한이 없습니다')
      navigate(-1)
    }
  }, [error, navigate])

  return {
    isRenderable: action.type === 'render',
    status: error instanceof ApiError ? error.status : null,
  }
}
