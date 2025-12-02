import type { StudyCardProps } from '@/components/studygroup'
import { Book, Calendar } from 'lucide-react'

export function StudyCardContent({
  name,
  dateRange,
  lectures,
}: Pick<StudyCardProps, 'name' | 'dateRange' | 'lectures'>) {
  return (
    <div className="flex-1">
      <h3 className="text-custom-gray-900 mb-3 line-clamp-1 text-lg font-bold">
        {name}
      </h3>
      <div className="text-custom-gray-700 space-y-2 text-sm">
        <div className="flex items-center gap-2">
          <Calendar size={14} />
          <span>스터디 기간</span>
        </div>
        <p className="pl-5.5 font-medium">{dateRange}</p>
        <div className="mt-3 flex items-center gap-2">
          <Book size={14} />
          <span>스터디 강의 ({lectures.length})</span>
        </div>
        <div className="space-y-0.5 pl-5.5">
          {lectures.map((lecture, idx) => (
            <div key={idx}>
              <p className="line-clamp-1 font-medium">{lecture.title}</p>
              <p className="line-clamp-1">{lecture.instructor}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
