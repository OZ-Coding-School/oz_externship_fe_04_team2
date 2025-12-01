import { Card } from '@/components/common'
import { SquareArrowOutUpRight } from 'lucide-react'

export function StudyLectureList() {
  return (
    <section className="border-custom-gray-200 flex max-w-[384px] flex-col gap-4 rounded-xl border p-6">
      <p className="text-lg font-semibold">스터디 강의</p>
      <Card className="overflow-hidden p-0">
        <div className="h-[186px] w-full">
          <img src="" alt="" className="h-full w-full object-cover" />
        </div>
        <ul className="p-4 pb-5">
          <li className="pb-1 font-medium">React 완벽 마스터 강의</li>
          <li className="text-custom-gray-600 pb-3 text-sm">김개발</li>
          <li>
            <a
              href="https://inf.run/FiFhg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 flex items-center gap-1 text-sm font-medium"
            >
              강의 바로가기
              <SquareArrowOutUpRight className="h-[14px] w-[14px]" />
            </a>
          </li>
        </ul>
      </Card>
    </section>
  )
}
