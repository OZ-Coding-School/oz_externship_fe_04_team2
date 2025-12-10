import { axiosInstance } from '@/api/axios'
import { API_PATHS } from '@/constants'
import type {
  CreateStudyScheduleRequestType,
  ScheduleSuccessResponseType,
  StudyScheduleDetailType,
  StudyScheduleListItemType,
  UpdateStudyScheduleRequestType,
} from '@/types'

// 스터디 스케줄 생성 API
// POST /api/v1/study-groups/{group_id}/schedules
export const createStudySchedule = async (
  groupId: number | string,
  body: CreateStudyScheduleRequestType
) => {
  const { data } = await axiosInstance.post<ScheduleSuccessResponseType>(
    API_PATHS.SCHEDULE.LIST(groupId),
    body
  )
  return data
}

// 스터디 목록 조회 API
// GET /api/v1/study-groups/{group_id}/schedules
export const getStudySchedules = async (groupId: number | string) => {
  const { data } = await axiosInstance.get<StudyScheduleListItemType[]>(
    API_PATHS.SCHEDULE.LIST(groupId)
  )
  return data
}

// 스터디 스케줄 상세 조회 API
// GET /api/v1/study-groups/{group_id}/schedules/{schedule_id}
export const getStudyScheduleDetail = async (
  groupId: number | string,
  scheduleId: number | string
) => {
  const { data } = await axiosInstance.get<StudyScheduleDetailType>(
    API_PATHS.SCHEDULE.DETAIL(groupId, scheduleId)
  )
  return data
}

// 스터디 스케줄 수정 API
// PATCH /api/v1/study-groups/{group_id}/schedules/{schedule_id}
export const updateStudySchedule = async (
  groupId: number | string,
  scheduleId: number | string,
  body: UpdateStudyScheduleRequestType
) => {
  const { data } = await axiosInstance.patch<StudyScheduleDetailType>(
    API_PATHS.SCHEDULE.DETAIL(groupId, scheduleId),
    body
  )
  return data
}

// 스터디 스케줄 삭제 API
// DELETE /api/v1/study-groups/{group_id}/schedules/{schedule_id}
export const deleteStudySchedule = async (
  groupId: number | string,
  scheduleId: number | string
) => {
  const { data } = await axiosInstance.delete<ScheduleSuccessResponseType>(
    API_PATHS.SCHEDULE.DETAIL(groupId, scheduleId)
  )
  return data
}
