import { Badge, Card } from '@/components/common'
import { UserRound } from 'lucide-react'

export function StudyMemberList() {
  return (
    <Card>
      <div className="flex items-center justify-between pb-4">
        <p className="text-lg font-semibold">멤버 목록</p>
        <span className="text-custom-gray-500 text-sm">8명</span>
      </div>
      <ul className="flex max-h-[384px] flex-col gap-3 overflow-y-auto">
        <li className="flex items-center gap-3">
          <span className="bg-primary-100 flex h-10 w-10 items-center justify-center rounded-full">
            <UserRound className="text-primary-600 h-5 w-5" />
          </span>
          <span>김개발</span>
          <Badge className="h-6 rounded-sm">리더</Badge>
        </li>
      </ul>
    </Card>
  )
}
