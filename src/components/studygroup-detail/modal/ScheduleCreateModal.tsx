import { Controller, useForm } from 'react-hook-form'
import {
  Badge,
  Button,
  Checkbox,
  Dropdown,
  Input,
  Modal,
  Textarea,
} from '@/components/common'
import { createTimeOptions } from '@/utils/format'
import { DatePickerInput } from '@/components/date-picker/DatePickerInput'
import { useBodyScrollLock } from '@/hooks'

// 10분 단위 시간 옵션
const TIME_OPTIONS = createTimeOptions(10)

interface ScheduleCreateModalProps {
  isOpen: boolean
  onClose: () => void
}

interface ScheduleFormValues {
  // DatePicker는 Date 객체를 사용하므로 UI 폼에서는 Date 유지
  // API 호출 시 yyyy-MM-dd 문자열(session_date)로 변환 예정
  title: string
  objective: string
  date: Date | null
  start_time: string
  end_time: string
  participants: number[]
}

export function ScheduleCreateModal({
  isOpen,
  onClose,
}: ScheduleCreateModalProps) {
  const { register, handleSubmit, control } = useForm<ScheduleFormValues>({
    defaultValues: {
      title: '',
      objective: '',
      date: null,
      start_time: '',
      end_time: '',
      participants: [],
    },
  })

  useBodyScrollLock(isOpen)

  const onSubmit = (data: ScheduleFormValues) => {
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
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-6"
      >
        <Input
          label="스케줄명"
          placeholder="스케줄 제목을 입력하세요"
          required
          {...register('title')}
        />

        <Textarea
          label="스터디 목표"
          placeholder="이번 스터디에서 달성하고자 하는 목표를 입력하세요"
          required
          {...register('objective')}
        />

        <Controller
          control={control}
          name="date"
          rules={{ required: '스터디 날짜를 선택해주세요' }}
          render={({ field, fieldState }) => (
            <DatePickerInput
              label="스터디 날짜"
              value={field.value ?? undefined}
              // DatePicker는 undefined를 사용하지만, RHF에서는 null로 관리
              onChange={(date) => field.onChange(date ?? null)}
              required
              error={fieldState.error?.message}
            />
          )}
        />

        <div className="flex gap-3">
          <div className="flex-1 space-y-1.5">
            <p className="text-custom-gray-700 text-sm leading-none font-medium">
              시작 시간 <span className="text-danger-500">*</span>
            </p>
            <Controller
              control={control}
              name="start_time"
              rules={{ required: '시작 시간을 선택해주세요' }}
              render={({ field }) => (
                <Dropdown
                  options={TIME_OPTIONS}
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="00:00"
                />
              )}
            />
          </div>

          <div className="flex-1 space-y-1.5">
            <p className="text-custom-gray-700 text-sm leading-none font-medium">
              종료 시간 <span className="text-danger-500">*</span>
            </p>
            <Controller
              control={control}
              name="end_time"
              rules={{ required: '종료 시간을 선택해주세요' }}
              render={({ field }) => (
                <Dropdown
                  options={TIME_OPTIONS}
                  value={field.value}
                  onChange={field.onChange}
                  placeholder="00:00"
                />
              )}
            />
          </div>
        </div>

        <div className="flex flex-col space-y-1.5">
          <p className="text-custom-gray-700 text-sm font-medium">
            참여자 선택 <span className="text-danger-500">*</span>
          </p>
          <ul className="border-custom-gray-200 flex max-h-[192px] min-h-24 flex-col gap-2 overflow-y-auto rounded-lg border p-4">
            <li>
              <Checkbox label="김개발" shape="square" />
            </li>
            <li className="flex gap-2">
              <Checkbox label="김개발" shape="square" />
              <Badge variant="default">리더</Badge>
            </li>
          </ul>
          <p className="text-custom-gray-500 text-xs">선택된 참여자: 0명</p>
        </div>

        <div className="border-custom-gray-200 flex justify-end gap-3 border-t pt-6">
          <Button variant="outline" type="button" onClick={onClose}>
            취소
          </Button>
          <Button variant="primary" type="submit">
            추가하기
          </Button>
        </div>
      </form>
    </Modal>
  )
}
