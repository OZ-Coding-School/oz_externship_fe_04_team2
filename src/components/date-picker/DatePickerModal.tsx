import { Modal } from '@/components/common'
import {
  CustomCaptionLabel,
  CustomChevron,
  CustomFooter,
} from '@/components/date-picker'
import { ko } from 'date-fns/locale'
import { DayPicker } from 'react-day-picker'
import { startOfToday } from 'date-fns'
import 'react-day-picker/style.css'
import './date-picker.css'

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
  const handleClickToday = () => {
    const today = startOfToday()
    onChange(today)
  }

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="스터디 시작일 선택"
      className="p-0"
      wrapperClassName="w-[448px] h-auto p-0 m-0"
      innerClassName="p-0 border-t-1 mb-0 border-custom-gray-200"
      titleClassName="flex justify-between text-lg font-normal p-6 titleClassWrap"
    >
      <DayPicker
        mode="single"
        locale={ko}
        navLayout="around"
        selected={selected}
        onSelect={onChange}
        disabled={{ before: new Date() }}
        showOutsideDays
        components={{
          CaptionLabel: (captionProps) => (
            <CustomCaptionLabel
              {...captionProps}
              handleClickToday={handleClickToday}
            />
          ),
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
