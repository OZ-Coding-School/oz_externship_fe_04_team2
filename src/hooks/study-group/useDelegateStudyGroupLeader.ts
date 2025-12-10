import { delegateStudyGroupLeader } from '@/api/studygroup'
import type { StudyGroupSuccessResponseType } from '@/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { AxiosError } from 'axios'

// 리더 위임
export const useDelegateStudyGroupLeader = (groupId: number | string) => {
  const queryClient = useQueryClient()

  return useMutation<StudyGroupSuccessResponseType, AxiosError, number>({
    mutationFn: (targetMemberId) =>
      delegateStudyGroupLeader(groupId, targetMemberId),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['study-group-detail', groupId],
      })
    },
  })
}
