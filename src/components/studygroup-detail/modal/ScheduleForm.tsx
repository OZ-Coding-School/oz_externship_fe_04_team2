import {
  Badge,
  Button,
  Checkbox,
  Dropdown,
  Input,
  Textarea,
} from '@/components/common'
import { DatePickerInput } from '@/components/date-picker/DatePickerInput'
import { studyScheduleFormSchema, type StudyScheduleFormData } from '@/schema'
import { ScheduleFormModeType, type StudyGroupMemberType } from '@/types'
import { createTimeOptions } from '@/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'

// 10분 단위 시간 옵션
const TIME_OPTIONS = createTimeOptions(10)

interface ScheduleFormProps {
  mode: ScheduleFormModeType
  defaultValues: StudyScheduleFormData
  members: StudyGroupMemberType[]
  onSubmit: (values: StudyScheduleFormData) => void
  onCancel: () => void
}

export function ScheduleForm({
  mode,
  defaultValues,
  members,
  onSubmit,
  onCancel,
}: ScheduleFormProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<StudyScheduleFormData>({
    defaultValues,
    resolver: zodResolver(studyScheduleFormSchema),
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
        {...register('title')}
      />

      <Textarea
        label="스터디 목표"
        placeholder="이번 스터디에서 달성하고자 하는 목표를 입력하세요"
        required
        error={errors.objective?.message}
        {...register('objective')}
      />

      <Controller
        control={control}
        name="date"
        render={({ field }) => (
          <DatePickerInput
            label="스터디 날짜"
            value={field.value ?? undefined}
            // DatePicker는 undefined를 사용하지만, RHF에서는 null로 관리
            onChange={(date) => field.onChange(date ?? null)}
            required
            error={errors.date?.message}
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
            render={({ field }) => (
              <Dropdown
                options={TIME_OPTIONS}
                value={field.value}
                onChange={field.onChange}
                placeholder="00:00"
              />
            )}
          />
          {errors.start_time?.message && (
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
            render={({ field }) => (
              <Dropdown
                options={TIME_OPTIONS}
                value={field.value}
                onChange={field.onChange}
                placeholder="00:00"
              />
            )}
          />
          {errors.end_time?.message && (
            <p className="text-danger-500 text-xs">{errors.end_time.message}</p>
          )}
        </div>
      </div>

      <Controller
        control={control}
        name="participants"
        render={({ field }) => {
          const selectedIds = field.value ?? []
          return (
            <div className="flex flex-col space-y-1.5">
              <p className="text-custom-gray-700 text-sm font-medium">
                참여자 선택 <span className="text-danger-500">*</span>
              </p>

              <ul className="border-custom-gray-200 flex max-h-[192px] min-h-24 flex-col gap-2 overflow-y-auto rounded-lg border p-4">
                {members.map((member) => {
                  const checked = selectedIds.includes(member.id)

                  const toggle = () => {
                    const next = checked
                      ? selectedIds.filter((id) => id !== member.id)
                      : [...selectedIds, member.id]
                    field.onChange(next)
                  }
                  return (
                    <li key={member.id} className="flex items-center gap-2">
                      <Checkbox
                        label={member.nickname}
                        shape="square"
                        checked={checked}
                        onChange={toggle}
                      />
                      {member.is_leader && (
                        <Badge
                          variant="primary"
                          className="h-6 rounded-sm px-2"
                        >
                          리더
                        </Badge>
                      )}
                    </li>
                  )
                })}
              </ul>

              {errors.participants?.message && (
                <p className="text-danger-500 text-xs">
                  {errors.participants.message}
                </p>
              )}

              <p className="text-custom-gray-500 text-xs">
                선택된 참여자: {selectedIds.length}명
              </p>
            </div>
          )
        }}
      />

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
