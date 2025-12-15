import { z } from 'zod'

export const studyScheduleFormSchema = z.object({
  title: z.string().min(1, '스케줄명을 입력해주세요'),
  objective: z.string().min(1, '스터디 목표를 입력해주세요'),
  date: z
    .date()
    .nullable()
    .refine((value) => value != null, {
      message: '스터디 날짜를 선택해주세요',
    }),
  start_time: z.string().min(1, '시작 시간을 선택해주세요'),
  end_time: z.string().min(1, '종료 시간을 선택해주세요'),
  participants: z.array(z.number()).min(1, '최소 1명의 참여자를 선택해주세요'),
})

export type StudyScheduleFormData = z.infer<typeof studyScheduleFormSchema>
