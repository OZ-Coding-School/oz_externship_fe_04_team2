import type { ScheduleEvent } from '@/components/schedule-calendar'
import type { EventProps } from 'react-big-calendar'

export function ScheduleEventItem({ event }: EventProps<ScheduleEvent>) {
  return (
    <>
      <p>{event.title}</p>
      <p className="text-primary-800/75 font-normal">{event.timeLabel}</p>
    </>
  )
}
