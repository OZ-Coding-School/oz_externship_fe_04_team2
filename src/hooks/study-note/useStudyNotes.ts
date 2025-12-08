import { getStudyNotes } from '@/api'
import type { StudyNoteListResponseType } from '@/types'
import { useQuery } from '@tanstack/react-query'

// 스터디 노트 목록 조회
export const useStudyNotes = (
  groupId: number | string,
  page?: number,
  pageSize?: number
) => {
  return useQuery<StudyNoteListResponseType>({
    queryKey: ['study-notes', groupId, page, pageSize],
    queryFn: () => getStudyNotes(groupId, page, pageSize),
  })
}
