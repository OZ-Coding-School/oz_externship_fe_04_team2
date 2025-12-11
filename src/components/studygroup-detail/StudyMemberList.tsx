import { Badge, Card } from '@/components/common'
import { Plus, UserRound, X } from 'lucide-react'

export function StudyMemberList() {
  return (
    <Card>
      <div className="flex items-center justify-between pb-4">
        <p className="text-lg font-semibold">멤버 목록</p>
        <span className="text-custom-gray-500 text-sm">8명</span>
      </div>

      <ul className="flex max-h-[384px] flex-col gap-3 overflow-y-auto">
        <li className="group flex justify-between">
          <div className="flex items-center gap-3">
            <span className="bg-primary-100 centralize h-10 w-10 rounded-full">
              <UserRound className="text-primary-600 h-5 w-5" />
            </span>
            <span>김개발</span>
            <Badge className="h-6 rounded-sm">리더</Badge>
          </div>

          {/* 리더 액션 버튼 */}
          <div className="hidden items-center gap-3 text-sm group-hover:flex">
            <button
              type="button"
              title="리더 위임"
              className="text-primary-600 centralize bg-primary-100 h-7 w-7 rounded-full"
            >
              <Plus className="h-5 w-5" />
            </button>
            <button
              type="button"
              title="김개발님을 추방"
              className="text-danger-600 centralize h-7 w-7 rounded-full bg-[#FEF2F2]"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </li>
      </ul>
    </Card>
  )
}
