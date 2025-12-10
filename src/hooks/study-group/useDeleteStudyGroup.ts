import { deleteStudyGroup } from '@/api/studygroup'
import type { StudyGroupSuccessResponseType } from '@/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { AxiosError } from 'axios'

// 스터디 그룹 삭제
export const useDeleteStudyGroup = () => {
  const queryClient = useQueryClient()

  return useMutation<
    StudyGroupSuccessResponseType,
    AxiosError,
    string | number
  >({
    mutationFn: (groupId) => deleteStudyGroup(groupId),
    onSuccess: (_, groupId) => {
      // 삭제된 그룹 캐시 제거
      queryClient.removeQueries({ queryKey: ['study-group-detail', groupId] })
      // 목록 갱신
      queryClient.invalidateQueries({ queryKey: ['study-groups'] })
    },
  })
}
