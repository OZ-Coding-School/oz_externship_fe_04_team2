import type { ScheduleEvent } from '@/components/schedule-calendar'
import { Clock3 } from 'lucide-react'
import type { EventProps } from 'react-big-calendar'

export function ScheduleEventItem({ event }: EventProps<ScheduleEvent>) {
  return (
    <>
      <span>{event.title}</span>
      <span className="text-primary-800/75">
        <Clock3 size={12} />
        {event.timeLabel}
      </span>
    </>
  )
}
