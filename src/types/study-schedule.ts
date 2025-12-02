// api/v1/study-groups/{group_id}/schedules
// 스케줄 생성 요청 타입
export interface CreateStudyScheduleRequestType {
  title: string
  objective: string
  session_date: string
  start_time: string
  end_time: string
  participants: number[]
}

// 스케줄 생성 성공 응답
export interface CreateStudyScheduleResponseType {
  detail: string
}
