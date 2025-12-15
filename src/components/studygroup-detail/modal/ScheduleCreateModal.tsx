import { useBodyScrollLock } from '@/hooks'
import {
  ScheduleFormModeType,
  type CreateStudyScheduleRequestType,
} from '@/types'
import { ScheduleForm } from '@/components/studygroup-detail/modal/ScheduleForm'
import { Modal } from '@/components/common'
import { useCreateStudySchedule } from '@/hooks/study-schedule'
import { format } from 'date-fns'
import { mockScheduleParticipants } from '@/mocks/data'
import type { StudyScheduleFormData } from '@/schema'

interface ScheduleCreateModalProps {
  isOpen: boolean
  onClose: () => void
  groupId: number
}

export function ScheduleCreateModal({
  isOpen,
  onClose,
  groupId,
}: ScheduleCreateModalProps) {
  useBodyScrollLock(isOpen)

  const { mutate } = useCreateStudySchedule(groupId)

  const defaultValues: StudyScheduleFormData = {
    title: '',
    objective: '',
    date: null,
    start_time: '',
    end_time: '',
    participants: [],
  }

  const handleSubmit = (data: StudyScheduleFormData) => {
    const payload: CreateStudyScheduleRequestType = {
      title: data.title,
      objective: data.objective,
      session_date: data.date ? format(data.date, 'yyyy-MM-dd') : '',
      start_time: data.start_time,
      end_time: data.end_time,
      participants: data.participants,
    }

    mutate(payload, {
      onSuccess: onClose,
    })
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="새 스케줄 추가"
      wrapperClassName="w-screen rounded-none sm:rounded-xl sm:w-[70vw] sm:max-w-[673px] h-screen h-dvh sm:h-auto sm:max-h-[80vh] p-0 m-0"
      innerClassName="mb-0 p-6 justify-start"
      titleClassName="p-6 border-b border-custom-gray-200"
    >
      <ScheduleForm
        mode={ScheduleFormModeType.CREATE}
        defaultValues={defaultValues}
        members={mockScheduleParticipants}
        onSubmit={handleSubmit}
        onCancel={onClose}
      />
    </Modal>
  )
}
