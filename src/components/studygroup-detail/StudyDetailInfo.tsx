import { Badge, Card } from '@/components/common'

export function StudyDetailInfo() {
  return (
    <Card className="max-w-[384px] rounded-xl">
      <p className="pb-4 text-lg font-semibold">스터디 정보</p>
      <ul className="flex flex-col gap-3">
        <li className="flex justify-between">
          <span className="text-custom-gray-600">인원</span>
          <span className="font-medium">0/0명</span>
        </li>
        <li className="flex justify-between">
          <span className="text-custom-gray-600">시작일</span>
          <span className="font-medium">2024.2.1</span>
        </li>
        <li className="flex justify-between">
          <span className="text-custom-gray-600">종료일</span>
          <span className="font-medium">2024.4.30</span>
        </li>
        <li className="flex justify-between">
          <span className="text-custom-gray-600">상태</span>
          <Badge>진행중</Badge>
        </li>
      </ul>
    </Card>
  )
}
