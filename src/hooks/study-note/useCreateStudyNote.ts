import { createStudyNote } from '@/api'
import type {
  CreateStudyNoteRequestType,
  StudyNoteSuccessResponseType,
} from '@/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { AxiosError } from 'axios'

// 스터디 노트 생성
export const useCreateStudyNote = (groupId: number | string) => {
  const queryClient = useQueryClient()

  return useMutation<
    StudyNoteSuccessResponseType,
    AxiosError,
    CreateStudyNoteRequestType
  >({
    mutationFn: (body) => createStudyNote(groupId, body),
    onSuccess: () => {
      // 생성 성공 시 해당 그룹 노트 목록 리패치
      queryClient.invalidateQueries({
        queryKey: ['study-notes', groupId],
      })
    },
  })
}
