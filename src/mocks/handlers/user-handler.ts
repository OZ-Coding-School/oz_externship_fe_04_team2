import { http, HttpResponse } from 'msw'
import { userInformation } from '@/mocks/data/user/user'
import { API_PATHS } from '@/constants'

export const userInformationHandler = [
  http.get(API_PATHS.USER.GET, () => {
    return HttpResponse.json(userInformation)
  }),
]
