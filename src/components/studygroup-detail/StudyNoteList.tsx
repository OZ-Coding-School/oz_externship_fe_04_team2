import { Button, Card } from '@/components/common'
import { Pencil, UserRound } from 'lucide-react'

export function StudyNoteList() {
  return (
    <section className="border-custom-gray-200 flex flex-col gap-4 rounded-xl border p-6">
      <div className="flex items-center justify-between pb-6">
        <p className="text-lg font-semibold">스터디 기록</p>
        <Button variant="primary" className="gap-2 text-base">
          <Pencil className="h-4 w-4" />
          <span>작성하기</span>
        </Button>
      </div>
      <div>
        <ul>
          <li>
            <Card className="p-4">
              <div className="flex justify-between pb-3">
                <p className="text-custom-gray-900 text-lg">
                  React Hooks 실습 정리
                </p>
                <span className="text-custom-gray-500 text-sm">
                  2024. 02. 16. 오전 05:30
                </span>
              </div>
              <div className="flex items-center gap-3 py-[2px]">
                <span className="bg-primary-100 flex h-8 w-8 items-center justify-center rounded-full">
                  <UserRound className="text-primary-600 h-5 w-5" />
                </span>
                <span className="text-custom-gray-700 text-sm font-medium">
                  김개발
                </span>
              </div>
            </Card>
          </li>
        </ul>
      </div>
    </section>
  )
}
