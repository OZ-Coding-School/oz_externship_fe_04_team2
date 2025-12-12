import { Card } from '@/components/common'
import { StudyStatusBadge } from '@/components/studygroup-detail/StudyStatusBadge'
import type { StudyGroupDetailType } from '@/types'
import { formatDotDate } from '@/utils'

interface StudyDetailInfoProps {
  group: StudyGroupDetailType
}

export function StudyDetailInfo({ group }: StudyDetailInfoProps) {
  return (
    <Card className="rounded-xl">
      <p className="pb-4 text-lg font-semibold">스터디 정보</p>
      <ul className="flex flex-col gap-3">
        <li className="flex justify-between">
          <span className="text-custom-gray-600">인원</span>
          <span className="font-medium">
            {group.current_headcount}/{group.max_headcount}명
          </span>
        </li>
        <li className="flex justify-between">
          <span className="text-custom-gray-600">시작일</span>
          <span className="font-medium">{formatDotDate(group.start_at)}</span>
        </li>
        <li className="flex justify-between">
          <span className="text-custom-gray-600">종료일</span>
          <span className="font-medium">{formatDotDate(group.end_at)}</span>
        </li>
        <li className="flex justify-between">
          <span className="text-custom-gray-600">상태</span>
          <StudyStatusBadge status={group.status} className="px-2 text-xs" />
        </li>
      </ul>
    </Card>
  )
}
