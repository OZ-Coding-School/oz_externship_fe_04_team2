import { MSW_BASE_URL } from '@/constants/url-constants'
import { chatHandlers } from '@/mocks/handlers/chat-handlers'
import { userInformationHandler } from '@/mocks/handlers/user'
import { http, HttpResponse } from 'msw'

const getTestMSW = http.get(`${MSW_BASE_URL}/get-test`, () => {
  return HttpResponse.text('msw is working!')
})

export const handlers = [getTestMSW, ...userInformationHandler, ...chatHandlers]
