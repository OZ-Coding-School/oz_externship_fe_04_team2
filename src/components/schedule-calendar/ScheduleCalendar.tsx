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
import type {
  StudyScheduleDetailType,
  StudyScheduleListItemType,
} from '@/types'
import { parseISO } from 'date-fns'

export interface ScheduleEvent {
  id: number
  title: string
  timeLabel: string
  start: Date
  end: Date
}

interface ScheduleCalendarProps {
  schedules: StudyScheduleListItemType[]
  onScheduleClick?: (schedule: StudyScheduleDetailType) => void
}

export function ScheduleCalendar({
  schedules,
  onScheduleClick,
}: ScheduleCalendarProps) {
  const [month, setMonth] = useState(new Date())
  const formats = {
    monthHeaderFormat: 'yyyy년 MM월',
    dayHeaderFormat: 'MM월 dd일 eeee',
    popupHeaderFormat: 'MM월 dd일 eeee',
  }

  // react-big-calendar는 start/end가 Date 객체인 이벤트 배열 요구
  const toEvent = (schedule: StudyScheduleListItemType): ScheduleEvent => {
    return {
      id: schedule.id,
      title: schedule.title,
      timeLabel: `${schedule.start_time} ~ ${schedule.end_time}`,
      // ISO 문자열(yyyy-MM-ddTHH:mm) → Date 변환
      start: parseISO(`${schedule.session_date}T${schedule.start_time}`),
      end: parseISO(`${schedule.session_date}T${schedule.end_time}`),
    }
  }

  // API 스케줄 목록을 캘린더 이벤트 배열로 변환
  const events = (schedules ?? []).map(toEvent)

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
        events={events}
        defaultView="month"
        views={['month']}
        selectable
        culture="ko"
        components={{
          toolbar: CustomToolbar,
          event: ScheduleEventItem,
        }}
        popup
        messages={{
          showMore: (total) => (
            <span className="rbc-show-more-text" data-count={`+${total}`}>
              +{total} more
            </span>
          ),
        }}
        onSelectEvent={handleSelectScheduleDetail}
      />
    </div>
  )
}
