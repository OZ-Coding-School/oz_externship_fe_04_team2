import { Input } from '@/components/common'
import { CustomChevron } from '@/components/date-picker/CustomChevron'
import { format } from 'date-fns'
import { ko } from 'date-fns/locale'
import { Calendar } from 'lucide-react'
import { useState } from 'react'
import { DayPicker } from 'react-day-picker'
import 'react-day-picker/style.css'
import './date-picker.css'

interface DatePickerInputProps {
  label?: string
  error?: string | boolean
  required?: boolean
  placeholder?: string
  name?: string
  value?: Date
  onChange?: (date: Date | undefined) => void
}

export function DatePickerInput({
  label,
  error,
  required,
  placeholder = '-/-/-',
  name,
  value,
  onChange,
}: DatePickerInputProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleSelect = (date: Date | undefined) => {
    onChange?.(date)
    setIsOpen(false)
  }

  const displayValue = value ? format(value, 'yyyy.MM.dd') : ''

  return (
    <div className="relative">
      <Input
        label={label}
        error={error}
        required={required}
        placeholder={placeholder}
        value={displayValue}
        name={name}
        onClick={handleOpen}
        className="cursor-pointer"
        icon={<Calendar className="h-4 w-4" />}
        readOnly
      />

      {isOpen && (
        <div className="border-custom-gray-200 absolute top-full left-0 z-50 mt-1 rounded-lg border bg-white shadow-lg">
          <DayPicker
            mode="single"
            locale={ko}
            navLayout="around"
            selected={value}
            onSelect={handleSelect}
            disabled={{ before: new Date() }}
            showOutsideDays
            components={{
              Chevron: CustomChevron,
            }}
            classNames={{
              chevron: 'text-custom-gray-600',
            }}
          />
        </div>
      )}
    </div>
  )
}
