import { Checkbox } from '@/components/common'
import { cn } from '@/lib'
import type { StudyGroupLectureSelectionType } from '@/types'
import { formatMinutesToHHMM } from '@/utils'
import { Clock3 } from 'lucide-react'

interface SelectableLectureCardProps {
  results: StudyGroupLectureSelectionType
  isSelected: boolean
  onToggle: () => void
  isDisabled?: boolean
}

export function SelectableLectureCard({
  results,
  isSelected,
  onToggle,
  isDisabled = false,
}: SelectableLectureCardProps) {
  return (
    <div
      onClick={onToggle}
      className={cn(
        'xs:h-28 flex w-full cursor-pointer items-center gap-4 overflow-hidden rounded-xl border-2 bg-white p-4 transition-all duration-200',
        isSelected
          ? 'border-primary-400 bg-primary-50/10 ring-primary-400 ring-1'
          : 'border-custom-gray-200 hover:border-custom-gray-300'
      )}
    >
      <img
        src={results.thumbnail_img_url}
        alt={results.title}
        className="aspect-video w-24 rounded-lg object-cover transition-transform duration-300 md:w-32"
      />
      <div className="flex grow flex-col justify-between py-1">
        <div className="flex flex-col gap-1">
          <h3 className="text-base font-normal">{results.title}</h3>
          <p className="text-custom-gray-600 text-xs">{results.instructor}</p>
        </div>
        <div className="xs:flex-row xs:items-center xs:gap-3 mt-2 flex flex-col gap-1">
          <div
            className={cn(
              'rounded px-1.5 py-0.5 text-[10px] font-bold',
              results.platform === 'Inflearn' && 'bg-green-100 text-green-800',
              results.platform === 'Udemy' && 'bg-purple-100 text-purple-800',
              !['Inflearn', 'Udemy'].includes(results.platform) &&
                'text-custom-gray-800 bg-custom-gray-100'
            )}
          >
            {results.platform}
          </div>
          <div className="text-custom-gray-600 flex items-center gap-1 text-xs">
            <Clock3 size={12} />
            {formatMinutesToHHMM(results.total_class_time)}
          </div>
          <p className="text-custom-gray-900 mt-0.5 items-center text-sm font-semibold">
            ₩{results.discounted_price.toLocaleString()}
          </p>
        </div>
      </div>
      {isDisabled ? null : <Checkbox shape="round" checked={isSelected} />}
    </div>
  )
}
