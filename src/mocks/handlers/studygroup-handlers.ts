import { http, HttpResponse } from 'msw'
import { mockStudyList } from '@/mocks/data/studygroup'
import { API_PATHS } from '@/constants'

export const studygroupHandlers = [
  http.get(API_PATHS.STUDYGROUP.LIST, () => {
    return HttpResponse.json(mockStudyList)
  }),

  http.post(API_PATHS.STUDYGROUP.LIST, async ({ request }) => {
    const body = (await request.json()) as Record<string, unknown>

    return HttpResponse.json(
      {
        success: true,
        message: '스터디가 생성되었습니다.',
        data: {
          id: Date.now(),
          ...body,
        },
      },
      { status: 201 }
    )
  }),
]
