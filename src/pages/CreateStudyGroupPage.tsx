import { Button } from '@/components/common'
import {
  PageHeader,
  StudyGroupInfo,
  StudyGroupLectures,
  StudyGroupMemberSlider,
} from '@/components/studygroup'
import { studyGroupSchema, type StudyGroupForm } from '@/schema'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { API_PATHS } from '@/constants'
import { useNavigate } from 'react-router'

export function CreateStudyGroupPage() {
  const navigate = useNavigate()

  const methods = useForm<StudyGroupForm>({
    resolver: zodResolver(studyGroupSchema),
    defaultValues: {
      name: '',
      introduction: '',
      start_at: '',
      end_at: '',
      max_headcount: 2,
      profile_img_url: '',
      lectures: [],
    },
  })

  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = methods

  const onSubmit = handleSubmit(async (data) => {
    try {
      const res = await fetch(API_PATHS.STUDYGROUP.LIST, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!res.ok) {
        throw new Error('스터디 그룹 생성 실패')
      }

      navigate('/')
    } catch (err) {
      console.error(err)
      alert('에러 발생! 스터디 그룹 생성에 실패했습니다.')
    }
  })

  return (
    <FormProvider {...methods}>
      <form
        className="bg-custom-gray-50 flex w-full flex-col gap-8 p-8"
        onSubmit={onSubmit}
      >
        <PageHeader
          title="새 스터디 그룹 만들기"
          description="함께 공부할 멤버들과 스터디 그룹을 시작해보세요"
        />
        <StudyGroupInfo register={register} control={control} errors={errors} />
        <StudyGroupMemberSlider control={control} errors={errors} />
        <StudyGroupLectures control={control} errors={errors} />
        <div className="flex w-full justify-end gap-4">
          <Button variant="outline" onClick={() => navigate(-1)}>
            취소
          </Button>
          <Button variant="primary" className="px-8" type="submit">
            스터디 그룹 만들기
          </Button>
        </div>
      </form>
    </FormProvider>
  )
}
