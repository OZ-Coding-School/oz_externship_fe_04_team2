import { updateStudyGroup } from '@/api/studygroup'
import type { StudyGroupDetailType, UpdateStudyGroupRequestType } from '@/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { AxiosError } from 'axios'

// 스터디 그룹 수정
export const useUpdateStudyGroup = (groupId: string | number) => {
  const queryClient = useQueryClient()

  return useMutation<
    StudyGroupDetailType,
    AxiosError,
    UpdateStudyGroupRequestType
  >({
    mutationFn: (body) => updateStudyGroup(groupId, body),
    onSuccess: () => {
      // 상세 데이터 갱신
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
