import { http, HttpResponse } from 'msw'
import { mockStudyList } from '@/mocks/data/studygroup'

export const studygroupHandler = [
  http.get('/api/v1/study-groups', () => {
    return HttpResponse.json(mockStudyList)
  }),
]
