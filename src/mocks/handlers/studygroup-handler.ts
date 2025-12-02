import { http, HttpResponse } from 'msw'
import { mockStudyList } from './studygroup/mockData'

export const studygroupHandlers = [
  http.get('/api/v1/study-groups', () => {
    return HttpResponse.json(mockStudyList)
  }),
]
