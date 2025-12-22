import { Button } from '@/components/common'
import { ScheduleCalendar } from '@/components/schedule-calendar'
import {
  ScheduleCreateModal,
  ScheduleDetailModal,
  ScheduleEditModal,
} from '@/components/studygroup-detail/modal'
import {
  useDeleteStudySchedule,
  useStudySchedules,
} from '@/hooks/study-schedule'
import type { StudyGroupMemberType, StudyScheduleDetailType } from '@/types'
import { Plus } from 'lucide-react'
import { useState } from 'react'

interface StudyScheduleCalendarProps {
  groupId: number
  members: StudyGroupMemberType[]
}

export function StudyScheduleCalendar({
  groupId,
  members,
}: StudyScheduleCalendarProps) {
  const [isCreateOpen, setIsCreateOpen] = useState(false)
  const [isDetailOpen, setIsDetailOpen] = useState(false)
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [selectedSchedule, setSelectedSchedule] =
    useState<StudyScheduleDetailType | null>(null)

  const { data: schedules } = useStudySchedules(groupId)
  const { mutate: deleteSchedule } = useDeleteStudySchedule(groupId)

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
  }

  const handleEditSchedule = (schedule: StudyScheduleDetailType) => {
    setSelectedSchedule(schedule)
    setIsDetailOpen(false)
    setIsEditOpen(true)
  }

  const handleDeleteSchedule = (scheduleId: number) => {
    deleteSchedule(scheduleId, {
      onSuccess: () => {
        setIsDetailOpen(false)
        setSelectedSchedule(null)
      },
    })
  }

  const handleCloseEditModal = () => {
    setIsEditOpen(false)
    setIsDetailOpen(true)
  }

  const handleSaveEditedSchedule = (updated: StudyScheduleDetailType) => {
    setSelectedSchedule(updated)
    setIsEditOpen(false)
    setIsDetailOpen(true)
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

      {/* 스케줄 캘린더 */}
      <ScheduleCalendar
        schedules={schedules ?? []}
        onScheduleClick={handleScheduleClick}
      />

      {/* 새 스케줄 추가 모달 */}
      <ScheduleCreateModal
        isOpen={isCreateOpen}
        onClose={handleCloseCreateModal}
        groupId={groupId}
        members={members}
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

      {selectedSchedule && (
        <ScheduleEditModal
          isOpen={isEditOpen}
          onClose={handleCloseEditModal}
          schedule={selectedSchedule}
          onSave={handleSaveEditedSchedule}
          groupId={groupId}
          members={members}
        />
      )}
    </section>
  )
}
