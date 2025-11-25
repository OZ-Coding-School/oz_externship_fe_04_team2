import Toolbar from '@/components/schedule-calendar/CustomToolbar'
import { localizer } from '@/utils'
import { useState } from 'react'
import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

export default function ScheduleCalendar() {
  const [month, setMonth] = useState(new Date())
  const formats = { monthHeaderFormat: 'yyyy년 MM월' }

  return (
    <div className="schedule-calendar h-[600px]">
      <Calendar
        localizer={localizer}
        date={month}
        onNavigate={(newDate) => {
          setMonth(newDate)
        }}
        formats={formats}
        startAccessor="start"
        endAccessor="end"
        defaultView="month"
        views={['month']}
        selectable
        culture="ko"
        components={{
          toolbar: Toolbar,
        }}
      />
    </div>
  )
}
