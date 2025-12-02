import { Input, Modal } from '@/components/common'

interface ScheduleCreateModalProps {
  isOpen: boolean
  onClose: () => void
}

export function ScheduleCreateModal({
  isOpen,
  onClose,
}: ScheduleCreateModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="새 스케줄 추가">
      <Input label="스케줄명" placeholder="스케줄 제목을 입력하세요" required />
    </Modal>
  )
}
