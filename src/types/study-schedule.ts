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

// 스케줄 생성 요청
export interface CreateStudyScheduleRequestType {
  title: string
  objective: string
  session_date: string
  start_time: string
  end_time: string
  participants: number[]
}

// 스케줄 수정 요청
export interface UpdateStudyScheduleRequestType {
  title?: string
  objective?: string
  session_date?: string
  start_time?: string
  end_time?: string
  participants?: number[]
}

// 스케줄 Form 타입
export enum ScheduleFormModeType {
  CREATE = 'create',
  EDIT = 'edit',
}

// 공통 폼에서 사용하는 값 타입
export interface ScheduleFormValuesType {
  // DatePicker는 Date 객체를 사용하므로 UI 폼에서는 Date 유지
  // API 호출 시 yyyy-MM-dd 문자열(session_date)로 변환 예정
  title: string
  objective: string
  date: Date | null
  start_time: string
  end_time: string
  participants: number[]
}
