import { http, HttpResponse } from 'msw'
import { userInformation } from './mockData'
import { API_PATHS } from '@/constants'

export const userInformationHandler = [
  http.get(API_PATHS.USER.GET, () => {
    return HttpResponse.json(userInformation)
  }),
]
