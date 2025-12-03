import { getStudySchedules } from '@/api'
import type { StudyScheduleListItemType } from '@/types'
import { useQuery } from '@tanstack/react-query'

// 스터디 스케줄 목록 조회
export const useStudySchedules = (groupId: number | string) => {
  return useQuery<StudyScheduleListItemType[]>({
    queryKey: ['study-schedules', groupId],
    queryFn: () => getStudySchedules(groupId),
  })
}
