import { Button } from '@/components/common'
import { ErrorLayout, NotFound } from '@/components/fallback-ui'
import { useQueryClient } from '@tanstack/react-query'
import { RefreshCcw } from 'lucide-react'
import { useApiError } from '@/hooks'

interface PageErrorProps {
  error: unknown
  resetErrorBoundary: () => void
}

export function PageError({ error, resetErrorBoundary }: PageErrorProps) {
  const queryClient = useQueryClient()
  const { isRenderable, status } = useApiError(error)

  const handleRetry = () => {
    queryClient.resetQueries()
    resetErrorBoundary()
  }

  if (!isRenderable) return null

  if (status === 404) {
    return <NotFound />
  }

  if (status && status >= 500) {
    return (
      <ErrorLayout
        title="500"
        headline="서버 오류가 발생했습니다"
        description="잠시 후 다시 시도해주세요."
      >
        <Button size="lg" variant="primary" onClick={handleRetry}>
          <RefreshCcw size={16} className="mr-2" />
          다시 시도
        </Button>
      </ErrorLayout>
    )
  }

  return (
    <ErrorLayout
      title="ERROR"
      headline="문제가 발생했습니다"
      description="예기치 못한 오류가 발생했습니다."
    >
      <Button size="lg" variant="primary" onClick={handleRetry}>
        새로고침
      </Button>
    </ErrorLayout>
  )
}
