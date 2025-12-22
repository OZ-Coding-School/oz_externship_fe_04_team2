import z from 'zod'

export const studyGroupSchema = z
  .object({
    name: z.string().min(1, '스터디 이름을 입력해주세요'),
    introduction: z.string().optional(),
    start_at: z.string().min(1, '시작일을 선택하세요'),
    end_at: z.string().min(1, '종료일을 선택하세요'),
    max_headcount: z.number().min(2, '최소 인원은 2명입니다').max(10),
    profile_img_url: z.string().optional(),
    profile_image_file: z.instanceof(File).optional(), // File 객체 저장용
    lectures: z.array(z.number()).max(5, '강의는 최대 5개까지 선택가능'),
  })

  .superRefine((data, ctx) => {
    if (!data.start_at || !data.end_at) return

    const start = new Date(data.start_at)
    const end = new Date(data.end_at)

    if (start > end) {
      ctx.addIssue({
        path: ['end_at'],
        message: '종료일은 시작일 이후여야 합니다',
        code: z.ZodIssueCode.custom,
      })
    }
  })

export type StudyGroupForm = z.infer<typeof studyGroupSchema>
