import { MSW_BASE_URL } from '@/constants'
import {
  chatHandlers,
  studygroupHandlers,
  userInformationHandler,
} from '@/mocks/handlers'
import { http, HttpResponse } from 'msw'

const getTestMSW = http.get(`${MSW_BASE_URL}/get-test`, () => {
  return HttpResponse.text('msw is working!')
})

export const handlers = [
  getTestMSW,
  ...userInformationHandler,
  ...chatHandlers,
  ...studygroupHandlers,
]
