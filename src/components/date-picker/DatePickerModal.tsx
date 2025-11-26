import { Modal } from '@/components/common'
import CustomCaptionLabel from '@/components/date-picker/CustomCaptionLabel'
import { CustomChevron } from '@/components/date-picker/CustomChevron'
import CustomFooter from '@/components/date-picker/CustomFooter'
import { ko } from 'date-fns/locale'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/style.css'

interface DatePickerModalProps {
  isOpen: boolean
  selected?: Date
  onClose: () => void
  onChange: (date: Date | undefined) => void
  onConfirm: () => void
}

export function DatePickerModal({
  isOpen,
  onClose,
  selected,
  onChange,
  onConfirm,
}: DatePickerModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="스터디 시작일 선택">
      <DayPicker
        mode="single"
        locale={ko}
        navLayout="around"
        selected={selected}
        onSelect={onChange}
        disabled={{ before: new Date() }}
        showOutsideDays
        components={{
          CaptionLabel: CustomCaptionLabel,
          Chevron: CustomChevron,
        }}
        footer={
          <CustomFooter
            selected={selected}
            onClose={onClose}
            onConfirm={onConfirm}
          />
        }
        classNames={{
          chevron: 'text-custom-gray-600',
        }}
      />
    </Modal>
  )
}
