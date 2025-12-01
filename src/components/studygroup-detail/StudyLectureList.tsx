import { Card } from '@/components/common'
import { SquareArrowOutUpRight } from 'lucide-react'

export function StudyLectureList() {
  return (
    <section className="border-custom-gray-200 flex max-w-[384px] flex-col gap-4 rounded-xl border p-6">
      <p className="text-lg font-semibold">스터디 강의</p>
      <Card className="overflow-hidden p-0">
        <div className="h-[186px] w-full">
          <img
            src="https://cdn.inflearn.com/public/files/courses/328340/cover/01jx9xv8sprqfcjdkhy723nw9y?f=avif&w=420"
            alt="강의 썸네일"
            className="h-full w-full overflow-hidden object-cover"
          />
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
