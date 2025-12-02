import { Button } from '@/components/common'
import { ScheduleCalendar } from '@/components/schedule-calendar'
import { ScheduleCreateModal } from '@/components/studygroup-detail/modal'
import { Plus } from 'lucide-react'
import { useState } from 'react'

export function StudyScheduleCalendar() {
  const [isCreateOpen, setIsCreateOpen] = useState(false)

  const handleOpenCreateModal = () => {
    setIsCreateOpen(true)
  }

  const handleCloseCreateModal = () => {
    setIsCreateOpen(false)
  }

  return (
    <section className="border-custom-gray-200 flex flex-col gap-4 rounded-xl border p-6">
      <div className="flex items-center justify-between pb-6">
        <p className="text-lg font-semibold">스케줄 관리</p>
        <Button
          variant="primary"
          className="gap-2 text-base"
          onClick={handleOpenCreateModal}
        >
          <Plus className="h-4 w-4" />
          <span>스케줄 추가</span>
        </Button>
      </div>
      <ScheduleCalendar />

      {/* 새 스케줄 추가 모달 */}
      <ScheduleCreateModal
        isOpen={isCreateOpen}
        onClose={handleCloseCreateModal}
      />
    </section>
  )
}
