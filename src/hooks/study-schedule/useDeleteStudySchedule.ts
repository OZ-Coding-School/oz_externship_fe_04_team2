import { deleteStudySchedule } from '@/api'
import type { ScheduleSuccessResponseType } from '@/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { AxiosError } from 'axios'

// 스터디 스케줄 삭제
export const useDeleteStudySchedule = (
  groupId: number | string,
  scheduleId: number | string
) => {
  const queryClient = useQueryClient()

  return useMutation<ScheduleSuccessResponseType, AxiosError>({
    mutationFn: () => deleteStudySchedule(groupId, scheduleId),
    onSuccess: () => {
      // 삭제 후 스케줄 목록 새로고침
      queryClient.invalidateQueries({
        queryKey: ['study-schedules', groupId],
      })

      // 삭제된 스케줄의 상세 캐시 제거
      queryClient.removeQueries({
        queryKey: ['study-schedule-detail', groupId, scheduleId],
      })
    },
  })
}
