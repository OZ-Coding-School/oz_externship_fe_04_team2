import { updateStudyNote } from '@/api'
import type {
  UpdateStudyNoteRequestType,
  UpdateStudyNoteResponseType,
} from '@/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { AxiosError } from 'axios'

// 스터디 노트 수정
export const useUpdateStudyNote = (
  groupId: number | string,
  noteId: number | string
) => {
  const queryClient = useQueryClient()

  return useMutation<
    UpdateStudyNoteResponseType,
    AxiosError,
    UpdateStudyNoteRequestType
  >({
    mutationFn: (body) => updateStudyNote(groupId, noteId, body),
    onSuccess: () => {
      // 상세 최신화
      queryClient.invalidateQueries({
        queryKey: ['study-note-detail', groupId, noteId],
      })
      // 목록 최신화
      queryClient.invalidateQueries({
        queryKey: ['study-notes', groupId],
      })
    },
  })
}
