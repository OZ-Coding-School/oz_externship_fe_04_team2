import z from 'zod'

export const studyGroupSchema = z.object({
  name: z.string().min(1, '스터디 이름을 입력해주세요'),
  introduction: z.string().optional(),
  start_at: z.string().min(1, '시작일을 선택하세요'),
  end_at: z.string().min(1, '종료일을 선택하세요'),
  max_headcount: z.number().min(2, '최소 인원은 2명입니다').max(10),
  profile_img_url: z.string().optional(),
  lectures: z.array(z.number()).max(5, '강의는 최대 5개까지 선택가능'),
})

export type StudyGroupForm = z.infer<typeof studyGroupSchema>
