import { getStudyNoteDetail } from '@/api'
import type { StudyNoteDetailType } from '@/types'
import { useQuery } from '@tanstack/react-query'

// 스터디 노트 상세 조회
export const useStudyNoteDetail = (
  groupId: number | string,
  noteId: number | string,
  enabled = true
) => {
  return useQuery<StudyNoteDetailType>({
    queryKey: ['study-note-detail', groupId, noteId],
    queryFn: () => getStudyNoteDetail(groupId, noteId),
    enabled,
  })
}
