import { Button } from '@/components/common'
import ScheduleCalendar from '@/components/schedule-calendar/ScheduleCalendar'
import { Plus } from 'lucide-react'

export function StudyScheduleCalendar() {
  return (
    <section className="border-custom-gray-200 flex flex-col gap-4 rounded-xl border p-6">
      <div className="flex items-center justify-between pb-6">
        <p className="text-lg font-semibold">스터디 기록</p>
        <Button variant="primary" className="gap-2 text-base">
          <Plus className="h-4 w-4" />
          <span>스케줄 추가</span>
        </Button>
      </div>
      <ScheduleCalendar />
    </section>
  )
}
