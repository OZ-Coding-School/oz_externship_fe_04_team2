import {
  Badge,
  Button,
  Checkbox,
  Dropdown,
  Input,
  Textarea,
} from '@/components/common'
import { DatePickerInput } from '@/components/date-picker/DatePickerInput'
import { ScheduleFormModeType, type ScheduleFormValuesType } from '@/types'

import { createTimeOptions } from '@/utils'
import { Controller, useForm } from 'react-hook-form'

// 10분 단위 시간 옵션
const TIME_OPTIONS = createTimeOptions(10)

interface ScheduleFormProps {
  mode: ScheduleFormModeType
  defaultValues: ScheduleFormValuesType
  onSubmit: (values: ScheduleFormValuesType) => void
  onCancel: () => void
}

export function ScheduleForm({
  mode,
  defaultValues,
  onSubmit,
  onCancel,
}: ScheduleFormProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ScheduleFormValuesType>({
    defaultValues,
  })

  const submitLabel =
    mode === ScheduleFormModeType.CREATE ? '추가하기' : '수정하기'

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col gap-6"
    >
      <Input
        label="스케줄명"
        placeholder="스케줄 제목을 입력하세요"
        required
        error={errors.title?.message}
        {...register('title', {
          required: '스케줄명을 입력해주세요.',
        })}
      />

      <Textarea
        label="스터디 목표"
        placeholder="이번 스터디에서 달성하고자 하는 목표를 입력하세요"
        required
        error={errors.objective?.message}
        {...register('objective', {
          required: '스터디 목표를 입력해주세요.',
        })}
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
          {errors.start_time && (
            <p className="text-danger-500 text-xs">
              {errors.start_time.message}
            </p>
          )}
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
          {errors.end_time && (
            <p className="text-danger-500 text-xs">{errors.end_time.message}</p>
          )}
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
        <Button variant="outline" type="button" onClick={onCancel}>
          취소
        </Button>
        <Button variant="primary" type="submit">
          {submitLabel}
        </Button>
      </div>
    </form>
  )
}
