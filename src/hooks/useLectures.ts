import { getLectures } from '@/api/lecture'
import { useQuery } from '@tanstack/react-query'

export function useLectures() {
  return useQuery({
    queryKey: ['lectures'],
    queryFn: getLectures,
    staleTime: 1000 * 60 * 3,
  })
}
