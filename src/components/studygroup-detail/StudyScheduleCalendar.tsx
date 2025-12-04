import { Button } from '@/components/common'
import { ScheduleCalendar } from '@/components/schedule-calendar'
import {
  ScheduleCreateModal,
  ScheduleDetailModal,
} from '@/components/studygroup-detail/modal'
import type { StudyScheduleDetailType } from '@/types'
import { Plus } from 'lucide-react'
import { useState } from 'react'

export function StudyScheduleCalendar() {
  const [isCreateOpen, setIsCreateOpen] = useState(false)
  const [isDetailOpen, setIsDetailOpen] = useState(false)
  const [selectedSchedule, setSelectedSchedule] =
    useState<StudyScheduleDetailType | null>(null)

  const handleOpenCreateModal = () => {
    setIsCreateOpen(true)
  }

  const handleCloseCreateModal = () => {
    setIsCreateOpen(false)
  }

  const handleScheduleClick = (schedule: StudyScheduleDetailType) => {
    setSelectedSchedule(schedule)
    setIsDetailOpen(true)
  }

  const handleCloseDetailModal = () => {
    setIsDetailOpen(false)
    setSelectedSchedule(null)
  }

  const handleEditSchedule = () => {
    // 수정 예정
    handleCloseDetailModal()
  }

  const handleDeleteSchedule = () => {
    // 수정 예정
    handleCloseDetailModal()
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

      {/* 스케줄 상세 모달 */}
      <ScheduleCalendar onScheduleClick={handleScheduleClick} />

      {/* 새 스케줄 추가 모달 */}
      <ScheduleCreateModal
        isOpen={isCreateOpen}
        onClose={handleCloseCreateModal}
      />

      {selectedSchedule && (
        <ScheduleDetailModal
          isOpen={isDetailOpen}
          onClose={handleCloseDetailModal}
          schedule={selectedSchedule}
          onEdit={handleEditSchedule}
          onDelete={handleDeleteSchedule}
        />
      )}
    </section>
  )
}
