import {
  mockScheduleParticipants,
  mockSchedules,
  toScheduleListItem,
} from '@/mocks/data/studygroup/schedule'
import type {
  CreateStudyScheduleRequestType,
  ScheduleSuccessResponseType,
  StudyScheduleDetailType,
  UpdateStudyScheduleRequestType,
} from '@/types'
import { http, HttpResponse } from 'msw'

// id 증가 유틸
const getNextScheduleId = () =>
  mockSchedules.length ? Math.max(...mockSchedules.map((s) => s.id)) + 1 : 1

// 스케줄 목록 조회
export const getStudySchedulesHandler = http.get(
  '/api/v1/study-groups/:groupId/schedules',
  ({ params }) => {
    const { groupId } = params
    const scheduleDetails = mockSchedules.filter(
      (schedule) => schedule.group_id === Number(groupId)
    )
    const scheduleListItems = scheduleDetails.map(toScheduleListItem)

    return HttpResponse.json(scheduleListItems, { status: 200 })
  }
)

// 스케줄 생성
export const createStudyScheduleHandler = http.post(
  '/api/v1/study-groups/:groupId/schedules',
  async ({ request, params }) => {
    const body = (await request.json()) as CreateStudyScheduleRequestType
    const now = new Date().toISOString()
    const id = getNextScheduleId()

    const participants = mockScheduleParticipants.filter((participant) =>
      body.participants.includes(participant.id)
    )

    const newSchedule: StudyScheduleDetailType = {
      id,
      group_id: Number(params.groupId),
      title: body.title,
      objective: body.objective,
      session_date: body.session_date,
      start_time: body.start_time,
      end_time: body.end_time,
      created_at: now,
      updated_at: now,
      participants,
    }

    mockSchedules.push(newSchedule)

    const response: ScheduleSuccessResponseType = {
      detail: '스터디 스케줄 생성에 성공했습니다.',
    }

    return HttpResponse.json(response, { status: 200 })
  }
)

// 스케줄 상세 조회
export const getStudyScheduleDetailHandler = http.get(
  '/api/v1/study-groups/:groupId/schedules/:scheduleId',
  ({ params }) => {
    const { groupId, scheduleId } = params
    const scheduleDetail = mockSchedules.find(
      (item) =>
        item.group_id === Number(groupId) && item.id === Number(scheduleId)
    )

    if (!scheduleDetail) {
      return HttpResponse.json(
        { error_detail: '스터디 스케줄을 찾을 수 없습니다.' },
        { status: 404 }
      )
    }

    return HttpResponse.json(scheduleDetail, { status: 200 })
  }
)

// 스케줄 수정
export const updateStudyScheduleHandler = http.patch(
  '/api/v1/study-groups/:groupId/schedules/:scheduleId',
  async ({ request, params }) => {
    const { groupId, scheduleId } = params
    const body = (await request.json()) as UpdateStudyScheduleRequestType

    const index = mockSchedules.findIndex(
      (schedule) =>
        schedule.group_id === Number(groupId) &&
        schedule.id === Number(scheduleId)
    )

    if (index === -1) {
      return HttpResponse.json(
        { error_detail: '스터디 스케줄을 찾을 수 없습니다.' },
        { status: 404 }
      )
    }

    const now = new Date().toISOString()
    const existing = mockSchedules[index]

    const participants = body.participants
      ? mockScheduleParticipants.filter((participant) =>
          body.participants!.includes(participant.id)
        )
      : existing.participants

    const updated: StudyScheduleDetailType = {
      ...existing,
      ...body,
      participants,
      updated_at: now,
    }

    mockSchedules[index] = updated

    return HttpResponse.json(updated, { status: 200 })
  }
)

// 스케줄 삭제
export const deleteStudyScheduleHandler = http.delete(
  '/api/v1/study-groups/:groupId/schedules/:scheduleId',
  ({ params }) => {
    const { groupId, scheduleId } = params

    const index = mockSchedules.findIndex(
      (schedule) =>
        schedule.group_id === Number(groupId) &&
        schedule.id === Number(scheduleId)
    )

    if (index === -1) {
      return HttpResponse.json(
        { error_detail: '스터디 스케줄을 찾을 수 없습니다.' },
        { status: 404 }
      )
    }

    mockSchedules.splice(index, 1)

    const response: ScheduleSuccessResponseType = {
      detail: '스터디 스케줄 삭제에 성공했습니다.',
    }

    return HttpResponse.json(response, { status: 200 })
  }
)

export const scheduleHandlers = [
  getStudySchedulesHandler,
  createStudyScheduleHandler,
  getStudyScheduleDetailHandler,
  updateStudyScheduleHandler,
  deleteStudyScheduleHandler,
]
