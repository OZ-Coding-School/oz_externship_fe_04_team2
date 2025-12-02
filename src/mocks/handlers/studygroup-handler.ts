import { http, HttpResponse } from 'msw'
import { mockStudyList } from '@/mocks/handlers/studygroup'

export const studygroupHandlers = [
  http.get('/api/v1/study-groups', () => {
    return HttpResponse.json(mockStudyList)
  }),
]
