import { MSW_BASE_URL } from '@/constants'
import {
  chatHandlers,
  noteHandlers,
  scheduleHandlers,
  studygroupHandler,
  userInformationHandler,
} from '@/mocks/handlers'
import { http, HttpResponse } from 'msw'
import { reviewHandlers } from './handlers/review-handlers'

const getTestMSW = http.get(`${MSW_BASE_URL}/get-test`, () => {
  return HttpResponse.text('msw is working!')
})

export const handlers = [
  getTestMSW,
  ...userInformationHandler,
  ...chatHandlers,
  ...reviewHandlers,
  ...studygroupHandler,
  ...scheduleHandlers,
  ...noteHandlers,
]
