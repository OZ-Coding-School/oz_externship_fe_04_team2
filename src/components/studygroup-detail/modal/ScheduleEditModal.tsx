import { Modal } from '@/components/common'
import { ScheduleForm } from '@/components/studygroup-detail/modal/ScheduleForm'
import { useBodyScrollLock } from '@/hooks'
import { useUpdateStudySchedule } from '@/hooks/study-schedule'
import type { StudyScheduleFormData } from '@/schema'
import {
  ScheduleFormModeType,
  type StudyGroupMemberType,
  type StudyScheduleDetailType,
  type UpdateStudyScheduleRequestType,
} from '@/types'
import { format, parseISO } from 'date-fns'

interface ScheduleEditModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (updated: StudyScheduleDetailType) => void
  schedule: StudyScheduleDetailType
  groupId: number
  members: StudyGroupMemberType[]
}

export function ScheduleEditModal({
  isOpen,
  onClose,
  onSave,
  schedule,
  groupId,
  members,
}: ScheduleEditModalProps) {
  useBodyScrollLock(isOpen)

  const { mutate } = useUpdateStudySchedule(groupId, schedule.id)

  const defaultValues: StudyScheduleFormData = {
    title: schedule.title,
    objective: schedule.objective,
    date: schedule.session_date ? parseISO(schedule.session_date) : null,
    start_time: schedule.start_time,
    end_time: schedule.end_time,
    participants: schedule.participants.map((participant) => participant.id),
  }

  const handleSubmit = (data: StudyScheduleFormData) => {
    const payload: UpdateStudyScheduleRequestType = {
      title: data.title,
      objective: data.objective,
      session_date: format(data.date!, 'yyyy-MM-dd'),
      start_time: data.start_time,
      end_time: data.end_time,
      participants: data.participants,
    }

    mutate(payload, {
      onSuccess: (updated) => {
        onSave(updated)
        onClose()
      },
    })
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="스케줄 수정"
      wrapperClassName="w-screen rounded-none sm:rounded-xl lg:max-w-[673px] sm:max-w-[520px] md:max-w-[600px] h-dvh sm:h-auto max-h-none p-0 m-0 md:max-h-[80vh] sm:w-full sm:mx-6 sm:my-10"
      innerClassName="mb-0 p-6 justify-start"
      titleClassName="p-6 border-b border-custom-gray-200"
    >
      <ScheduleForm
        mode={ScheduleFormModeType.EDIT}
        members={members}
        defaultValues={defaultValues}
        onSubmit={handleSubmit}
        onCancel={onClose}
      />
    </Modal>
  )
}
