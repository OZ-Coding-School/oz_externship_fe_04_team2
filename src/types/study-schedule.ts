import type { StudyGroupMemberType } from '@/types/studygroup-detail'

// api/v1/study-groups/{group_id}/schedules
// 스케줄 목록 조회
export interface StudyScheduleListItemType {
  id: number
  title: string
  session_date: string
  start_time: string
  end_time: string
}

// 스케줄 상세 조회 / 수정 응답
export interface StudyScheduleDetailType {
  id: number
  group_id: number
  title: string
  objective: string
  session_date: string
  start_time: string
  end_time: string
  created_at: string
  updated_at: string
  participants: StudyGroupMemberType[]
}

// 스케줄 메시지 응답 (생성/삭제)
export interface ScheduleSuccessResponseType {
  detail: string
}
