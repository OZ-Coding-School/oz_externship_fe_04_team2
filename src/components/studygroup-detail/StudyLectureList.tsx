import { Card } from '@/components/common'
import type { StudyGroupLectureType } from '@/types'
import { SquareArrowOutUpRight } from 'lucide-react'

interface StudyLectureListProps {
  lectures: StudyGroupLectureType[]
}

export function StudyLectureList({ lectures }: StudyLectureListProps) {
  return (
    <section className="border-custom-gray-200 flex flex-col gap-4 rounded-xl border p-6">
      <p className="text-lg font-semibold">스터디 강의</p>
      {lectures.length === 0 && (
        <p className="text-custom-gray-600 text-center">
          선택된 스터디 강의가 없습니다.
        </p>
      )}

      {lectures.map((lecture) => (
        <Card
          key={lecture.id}
          className="flex flex-col overflow-hidden p-0 sm:flex-row lg:flex-col"
        >
          <div className="w-full overflow-hidden sm:w-1/2 lg:h-[186px] lg:w-full">
            <img
              src={lecture.thumbnail_img_url}
              alt={lecture.title}
              className="h-full w-full overflow-hidden object-cover"
            />
          </div>
          <div className="w-full p-4 pb-5 sm:pt-6 lg:pt-4">
            <p className="pb-1 text-base font-medium sm:text-lg lg:text-base">
              {lecture.title}
            </p>
            <p className="text-custom-gray-600 pb-3 text-sm sm:text-base lg:text-sm">
              {lecture.instructor}
            </p>
            <a
              href={lecture.url_link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 flex items-center gap-1 text-sm font-medium"
            >
              강의 바로가기
              <SquareArrowOutUpRight className="h-[14px] w-[14px]" />
            </a>
          </div>
        </Card>
      ))}
    </section>
  )
}
