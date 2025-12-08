import { deleteStudyNote } from '@/api'
import type { StudyNoteSuccessResponseType } from '@/types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import type { AxiosError } from 'axios'

// 스터디 노트 삭제
export const useDeleteStudyNote = (groupId: number | string) => {
  const queryClient = useQueryClient()

  return useMutation<StudyNoteSuccessResponseType, AxiosError, number>({
    mutationFn: (noteId) => deleteStudyNote(groupId, noteId),
    onSuccess: (_, noteId) => {
      // 삭제 후 노트 목록 새로고침
      queryClient.invalidateQueries({
        queryKey: ['study-notes', groupId],
      })
      // 삭제된 노트 상세 캐시 제거
      queryClient.removeQueries({
        queryKey: ['study-note-detail', groupId, noteId],
      })
    },
  })
}
