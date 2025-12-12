import { Input } from '@/components/common'
import { MarkdownEditor } from '@/components/markdown'
import { ImageUploader } from '@/components/studygroup'
import type { StudyGroupForm } from '@/schema'
import {
  Controller,
  type UseFormRegister,
  type Control,
  type FieldErrors,
} from 'react-hook-form'

interface StudyGroupInfoProps {
  register: UseFormRegister<StudyGroupForm>
  control: Control<StudyGroupForm>
  errors: FieldErrors<StudyGroupForm>
}

export function StudyGroupInfo({
  register,
  control,
  errors,
}: StudyGroupInfoProps) {
  return (
    <section className="border-custom-gray-200 flex w-full flex-col gap-6 rounded-xl border bg-white p-8">
      <h1 className="text-xl font-bold">기본 정보</h1>
      <div className="flex flex-1 flex-col gap-1">
        <label className="text-custom-gray-700 text-sm font-medium">
          스터디 그룹명 <span className="text-danger-500">*</span>
        </label>
        <Input
          placeholder="스터디 그룹의 이름을 입력하세요"
          {...register('name')}
        />
        {errors.name && (
          <p className="text-danger-500 text-sm">{errors.name.message}</p>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-1">
        <label className="text-custom-gray-700 text-sm font-medium">
          스터디 그룹 소개 (선택사항)
        </label>
        <Controller
          name="introduction"
          control={control}
          render={({ field }) => (
            <MarkdownEditor
              value={field.value ?? ''}
              onChange={field.onChange}
            />
          )}
        />
      </div>
      <div className="flex flex-1 flex-col gap-1">
        <label className="text-custom-gray-700 text-sm font-medium">
          스터디 그룹 소개 (선택사항)
        </label>
        <Controller
          name="profile_img_url"
          control={control}
          render={({ field }) => (
            <ImageUploader
              value={field.value ?? ''}
              onChange={field.onChange}
            />
          )}
        />
        {errors.profile_img_url && (
          <p className="text-danger-500 text-sm">
            {errors.profile_img_url.message}
          </p>
        )}
      </div>
    </section>
  )
}
