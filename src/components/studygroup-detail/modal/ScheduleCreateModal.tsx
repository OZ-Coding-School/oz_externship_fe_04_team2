import { useBodyScrollLock } from '@/hooks'
import { ScheduleFormModeType, type ScheduleFormValuesType } from '@/types'
import { ScheduleForm } from '@/components/studygroup-detail/modal/ScheduleForm'
import { Modal } from '@/components/common'

interface ScheduleCreateModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ScheduleCreateModal({
  isOpen,
  onClose,
}: ScheduleCreateModalProps) {
  useBodyScrollLock(isOpen)

  const defaultValues: ScheduleFormValuesType = {
    title: '',
    objective: '',
    date: null,
    start_time: '',
    end_time: '',
    participants: [],
  }

  const handleSubmit = (data: ScheduleFormValuesType) => {
    // MSW 연결 후 제거 예정
    // eslint-disable-next-line no-console
    console.log(data)
    onClose()
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
        onSubmit={handleSubmit}
        onCancel={onClose}
      />
    </Modal>
  )
}
