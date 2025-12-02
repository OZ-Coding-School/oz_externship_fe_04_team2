// api/v1/study-groups/{group_id}
// 스터디 그룹 상세 조회 응답 타입

// 스터디 그룹 진행 상태
export type StudyGroupStatus = 'PENDING' | 'ONGOING' | 'ENDED'

// 스터디 그룹 강의 정보
export interface StudyGroupLectureType {
  id: number
  title: string
  instructor: string
  thumbnail_img_url: string
  url_link: string
}

// 스터디 그룹 멤버 정보
export interface StudyGroupMemberType {
  id: number
  nickname: string
  is_leader: boolean
  profile_img_url: string
}

// 스터디 그룹 상세 조회 응답
export interface StudyGroupDetailType {
  id: number
  name: string
  introduction: string
  start_at: string
  end_at: string
  max_headcount: number
  current_headcount: number
  profile_img_url: string
  status: StudyGroupStatus
  lectures: StudyGroupLectureType[]
  members: StudyGroupMemberType[]
}
