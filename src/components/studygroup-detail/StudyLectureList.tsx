import { Card } from '@/components/common'
import { SquareArrowOutUpRight } from 'lucide-react'

export function StudyLectureList() {
  return (
    <section className="border-custom-gray-200 flex flex-col gap-4 rounded-xl border p-6">
      <p className="text-lg font-semibold">스터디 강의</p>
      <Card className="flex flex-col overflow-hidden p-0 sm:flex-row lg:flex-col">
        <div className="w-full overflow-hidden sm:w-1/2 lg:h-[186px] lg:w-full">
          <img
            src="https://cdn.inflearn.com/public/files/courses/328340/cover/01jx9xv8sprqfcjdkhy723nw9y?f=avif&w=420"
            alt="강의 썸네일"
            className="h-full w-full overflow-hidden object-cover"
          />
        </div>
        <div className="w-full p-4 pb-5 sm:pt-6 lg:pt-4">
          <p className="pb-1 text-base font-medium sm:text-lg lg:text-base">
            React 완벽 마스터 강의
          </p>
          <p className="text-custom-gray-600 pb-3 text-sm sm:text-base lg:text-sm">
            김개발
          </p>
          <a
            href="https://inf.run/FiFhg"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-600 flex items-center gap-1 text-sm font-medium"
          >
            강의 바로가기
            <SquareArrowOutUpRight className="h-[14px] w-[14px]" />
          </a>
        </div>
      </Card>
    </section>
  )
}
