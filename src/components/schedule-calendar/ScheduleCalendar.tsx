import 'react-big-calendar/lib/css/react-big-calendar.css'
import './calendar.css'
import { localizer } from '@/utils'
import { useState } from 'react'
import { Calendar } from 'react-big-calendar'
import {
  CustomToolbar,
  ScheduleEventItem,
} from '@/components/schedule-calendar'
import { mockSchedules } from '@/mocks/data/studygroup/schedule'
import type { StudyScheduleDetailType } from '@/types'

// 임시 데이터
export interface ScheduleEvent {
  id: number
  title: string
  timeLabel: string
  start: Date
  end: Date
}

const mockEvents: ScheduleEvent[] = [
  {
    id: 1,
    title: '스터디 일정',
    timeLabel: '18:30 ~ 20:30',
    start: new Date(2025, 10, 25, 18, 30),
    end: new Date(2025, 10, 25, 20, 30),
  },
]

interface ScheduleCalendarProps {
  onScheduleClick?: (schedule: StudyScheduleDetailType) => void
}

export function ScheduleCalendar({ onScheduleClick }: ScheduleCalendarProps) {
  const [month, setMonth] = useState(new Date())
  const formats = { monthHeaderFormat: 'yyyy년 MM월' }

  // 월 변경 핸들러
  const handleMonthNavigate = (newDate: Date) => {
    setMonth(newDate)
  }

  // 스케줄 일정 클릭 시 상세 mock 데이터 조회 및 전달
  const handleSelectScheduleDetail = (event: ScheduleEvent) => {
    const detail = mockSchedules.find((schedule) => schedule.id === event.id)
    if (detail && onScheduleClick) {
      onScheduleClick(detail)
    }
  }

  return (
    <div className="h-[50vh] max-h-[600px] min-h-[320px]">
      <Calendar
        localizer={localizer}
        date={month}
        onNavigate={handleMonthNavigate}
        formats={formats}
        startAccessor="start"
        endAccessor="end"
        events={mockEvents}
        defaultView="month"
        views={['month']}
        selectable
        culture="ko"
        components={{
          toolbar: CustomToolbar,
          event: ScheduleEventItem,
        }}
        showAllEvents
        onSelectEvent={handleSelectScheduleDetail}
      />
    </div>
  )
}
