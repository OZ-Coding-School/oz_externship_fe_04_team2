import { MSW_BASE_URL } from '@/constants'
import {
  authHandlers,
  chatHandlers,
  lectureHandlers,
  noteHandlers,
  reviewHandlers,
  scheduleHandlers,
  studygroupHandlers,
} from '@/mocks/handlers'
import { studygroupDetailHandlers } from '@/mocks/handlers/studygroup-details-handler'
import { http, HttpResponse } from 'msw'

const getTestMSW = http.get(`${MSW_BASE_URL}/get-test`, () => {
  return HttpResponse.text('msw is working!')
})

export const handlers = [
  getTestMSW,
  ...chatHandlers,
  ...lectureHandlers,
  ...noteHandlers,
  ...reviewHandlers,
  ...scheduleHandlers,
  ...studygroupHandlers,
  ...studygroupDetailHandlers,
  ...authHandlers,
]
