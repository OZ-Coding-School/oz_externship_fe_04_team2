import {
  StudyCardContent,
  StudyCardFooter,
  StudyCardThumbnail,
} from '@/components/studygroup'

export interface StudyCardProps {
  image: string
  statusBadge: string
  statusColor?: string
  roleBadge?: string
  memberCount: string
  name: string
  dateRange: string
  lectures: { title: string; instructor: string }[]

  variant?: 'default' | 'completed'

  rating?: number
  reviewStatus?: 'none' | 'done'
  onActionClick?: () => void
}

export function StudyCard({
  image,
  statusBadge,
  statusColor = 'bg-success-500',
  roleBadge,
  memberCount,
  name,
  dateRange,
  lectures,
  variant = 'default',
  rating = 0,
  reviewStatus = 'none',
  onActionClick,
}: StudyCardProps) {
  return (
    <div className="border-custom-gray-200 flex h-[600px] flex-col overflow-hidden rounded-xl border bg-white shadow-sm transition-all hover:shadow-md">
      <StudyCardThumbnail
        image={image}
        name={name}
        statusBadge={statusBadge}
        statusColor={statusColor}
        roleBadge={roleBadge}
        memberCount={memberCount}
      />
      <div className="flex flex-1 flex-col p-5">
        <StudyCardContent
          name={name}
          dateRange={dateRange}
          lectures={lectures}
        />
        <StudyCardFooter
          variant={variant}
          rating={rating}
          reviewStatus={reviewStatus}
          onActionClick={onActionClick}
        />
      </div>
    </div>
  )
}
