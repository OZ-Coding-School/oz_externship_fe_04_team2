import { http, HttpResponse } from 'msw'
import { mockStudyList } from '@/mocks/data/studygroup'
import { API_PATHS } from '@/constants'

export const studygroupHandler = [
  http.get(API_PATHS.STUDYGROUP.LIST, () => {
    return HttpResponse.json(mockStudyList)
  }),
]
