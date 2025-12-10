import { leaveStudyGroup } from '@/api/studygroup'
import type { StudyGroupSuccessResponseType } from '@/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { AxiosError } from 'axios'

// 스터디 그룹 나가기
export const useLeaveStudyGroup = () => {
  const queryClient = useQueryClient()

  return useMutation<
    StudyGroupSuccessResponseType,
    AxiosError,
    string | number
  >({
    mutationFn: (groupId) => leaveStudyGroup(groupId),
    onSuccess: (_, groupId) => {
      // 해당 그룹 상세 캐시 무효화
      queryClient.invalidateQueries({
        queryKey: ['study-group-detail', groupId],
      })
      // 목록 갱신
      queryClient.invalidateQueries({
        queryKey: ['study-groups'],
      })
    },
  })
}
