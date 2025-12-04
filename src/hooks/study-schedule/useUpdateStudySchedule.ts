import { updateStudySchedule } from '@/api'
import type {
  StudyScheduleDetailType,
  UpdateStudyScheduleRequestType,
} from '@/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { AxiosError } from 'axios'

// 스터디 스케줄 수정
export const useUpdateStudySchedule = (
  groupId: number | string,
  scheduleId: number | string
) => {
  const queryClient = useQueryClient()

  return useMutation<
    StudyScheduleDetailType,
    AxiosError,
    UpdateStudyScheduleRequestType
  >({
    mutationFn: (body) => updateStudySchedule(groupId, scheduleId, body),
    onSuccess: () => {
      // 상세, 목록 모두 최신화
      queryClient.invalidateQueries({
        queryKey: ['study-schedule-detail', groupId, scheduleId],
      })
      queryClient.invalidateQueries({
        queryKey: ['study-schedules', groupId],
      })
    },
  })
}
