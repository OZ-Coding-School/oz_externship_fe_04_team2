import { cn } from '@/lib'
import type { StudyGroupStatus } from '@/types'

const statusLabelMap: Record<StudyGroupStatus, string> = {
  PENDING: '대기중',
  ONGOING: '진행중',
  ENDED: '종료됨',
}

const statusColorMap: Record<StudyGroupStatus, string> = {
  PENDING: 'bg-custom-gray-500',
  ONGOING: 'bg-success-500',
  ENDED: 'bg-danger-500',
}

interface StudyStatusBadgeProps {
  status: StudyGroupStatus
  className?: string
}
export function StudyStatusBadge({ status, className }: StudyStatusBadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex rounded-full px-3 py-1 text-sm text-white',
        statusColorMap[status],
        className
      )}
    >
      {statusLabelMap[status]}
    </span>
  )
}
