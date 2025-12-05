import { Modal } from '@/components/common'
import { ScheduleForm } from '@/components/studygroup-detail/modal/ScheduleForm'
import { useBodyScrollLock } from '@/hooks'
import { useUpdateStudySchedule } from '@/hooks/study-schedule'
import {
  ScheduleFormModeType,
  type ScheduleFormValuesType,
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
}

export function ScheduleEditModal({
  isOpen,
  onClose,
  onSave,
  schedule,
  groupId,
}: ScheduleEditModalProps) {
  useBodyScrollLock(isOpen)

  const { mutate } = useUpdateStudySchedule(groupId, schedule.id)

  const defaultValues: ScheduleFormValuesType = {
    title: schedule.title,
    objective: schedule.objective,
    date: schedule.session_date ? parseISO(schedule.session_date) : null,
    start_time: schedule.start_time,
    end_time: schedule.end_time,
    participants: schedule.participants.map((participant) => participant.id),
  }

  const handleSubmit = (data: ScheduleFormValuesType) => {
    const payload: UpdateStudyScheduleRequestType = {
      title: data.title,
      objective: data.objective,
      session_date: data.date
        ? format(data.date, 'yyyy-MM-dd')
        : schedule.session_date,
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
      wrapperClassName="w-screen rounded-none sm:rounded-xl sm:w-[70vw] sm:max-w-[673px] h-screen h-dvh sm:h-auto sm:max-h-[80vh] p-0 m-0"
      innerClassName="mb-0 p-6 justify-start"
      titleClassName="p-6 border-b border-custom-gray-200"
    >
      <ScheduleForm
        mode={ScheduleFormModeType.EDIT}
        defaultValues={defaultValues}
        onSubmit={handleSubmit}
        onCancel={onClose}
      />
    </Modal>
  )
}
