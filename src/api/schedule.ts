import { axiosInstance } from '@/api/axios'
import { API_PATHS } from '@/constants'
import type {
  CreateStudyScheduleRequestType,
  ScheduleSuccessResponseType,
} from '@/types'

// 스터디 스케줄 생성 API
// POST api/v1/study-groups/{group_id}/schedules
export const createStudySchedule = async (
  groupId: number | string,
  body: CreateStudyScheduleRequestType
) => {
  const { data } = await axiosInstance.post<ScheduleSuccessResponseType>(
    API_PATHS.STUDY_GROUP.SCHEDULES(groupId),
    body
  )
  return data
}
