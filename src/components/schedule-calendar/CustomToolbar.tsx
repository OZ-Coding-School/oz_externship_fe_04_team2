import { Button } from '@/components/common'
import type { ScheduleEvent } from '@/components/schedule-calendar'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { ToolbarProps } from 'react-big-calendar'

export function CustomToolbar({
  label,
  onNavigate,
}: ToolbarProps<ScheduleEvent, object>) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8"
        onClick={() => onNavigate('PREV')}
        aria-label="이전 달"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <div className="text-custom-gray-900 text-lg font-semibold">{label}</div>
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8"
        onClick={() => onNavigate('NEXT')}
        aria-label="다음 달"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}
