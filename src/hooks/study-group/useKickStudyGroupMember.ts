import { kickStudyGroupMember } from '@/api/studygroup'
import type { StudyGroupSuccessResponseType } from '@/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { AxiosError } from 'axios'

// 멤버 추방
export const useKickStudyGroupMember = (groupId: string | number) => {
  const queryClient = useQueryClient()

  return useMutation<
    StudyGroupSuccessResponseType,
    AxiosError,
    string | number
  >({
    mutationFn: (memberId) => kickStudyGroupMember(groupId, memberId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['study-group-detail', groupId],
      })
    },
  })
}
