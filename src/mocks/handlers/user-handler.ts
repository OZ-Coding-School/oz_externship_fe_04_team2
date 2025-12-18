import { http, HttpResponse } from 'msw'
import { userInformation } from '@/mocks/data'
import { API_PATHS } from '@/constants'

export const userInformationHandler = http.get(API_PATHS.USER.GET, () => {
  return HttpResponse.json(userInformation)
})

export const refreshTokenHandler = http.post(
  API_PATHS.USER.REFRESH_TOKEN,
  () => {
    return HttpResponse.json({ access_token: 'mock-new-access-token' })
  }
)

export const authHandlers = [userInformationHandler, refreshTokenHandler]
