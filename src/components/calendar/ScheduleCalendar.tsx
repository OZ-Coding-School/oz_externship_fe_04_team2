import { localizer } from '@/utils'
import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

export default function ScheduleCalendar() {
  return (
    <div className="h-[600px]">
      <Calendar
        localizer={localizer}
        startAccessor="startTime"
        endAccessor="endTime"
        defaultView="month"
        views={['month']}
        selectable
        culture="ko"
      />
    </div>
  )
}
