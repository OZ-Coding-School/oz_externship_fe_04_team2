import { http, HttpResponse } from 'msw'
import { mockLectures } from '@/mocks/data'
import { API_PATHS } from '@/constants'

export const lectureHandlers = [
  http.get(API_PATHS.STUDYGROUP.LECTURES, () => {
    return HttpResponse.json({
      count: mockLectures.length,
      next: null,
      previous: null,
      results: mockLectures,
    })
  }),

  http.get('/api/lectures/:id', ({ params }) => {
    const lecture = mockLectures.find((l) => l.id === Number(params.id))

    if (!lecture) {
      return HttpResponse.json({ message: 'not found' }, { status: 404 })
    }

    return HttpResponse.json(lecture)
  }),
]
