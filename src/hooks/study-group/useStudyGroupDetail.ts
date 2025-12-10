import { getStudyGroupDetail } from '@/api/studygroup'
import type { StudyGroupDetailType } from '@/types'
import { useQuery } from '@tanstack/react-query'

// 스터디 그룹 상세 조회
export const useStudyGroupDetail = (groupId: string | number) => {
  return useQuery<StudyGroupDetailType>({
    queryKey: ['study-group-detail', groupId],
    queryFn: () => getStudyGroupDetail(groupId),
    enabled: !!groupId,
  })
}
