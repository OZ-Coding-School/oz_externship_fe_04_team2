import { getStudyGroups } from '@/api'
import { useQuery } from '@tanstack/react-query'
import { ApiError } from '@/utils'

export function useStudyGroups() {
  return useQuery({
    queryKey: ['studyGroups'],
    queryFn: getStudyGroups,
    throwOnError: (e) => e instanceof ApiError && e.status >= 500,
  })
}
