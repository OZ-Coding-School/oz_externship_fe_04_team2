import { getStudyReviews } from '@/api'
import { ApiError } from '@/utils'
import { useQuery } from '@tanstack/react-query'

export function useStudyReviews(studyId: number) {
  return useQuery({
    queryKey: ['studyReviews', studyId],
    queryFn: () => getStudyReviews(studyId),
    enabled: !!studyId,
    throwOnError: (error) => error instanceof ApiError && error.status >= 500,
  })
}
