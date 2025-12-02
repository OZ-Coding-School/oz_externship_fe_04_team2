import type { StudyGroupLectureType, StudyGroupStatus } from '@/types'

export interface StudyGroupResponseType {
  id: number
  name: string
  is_leader: boolean
  start_at: string
  end_at: string
  max_headcount: number
  current_headcount: number
  profile_img_url: string | null
  status: StudyGroupStatus
  lectures: StudyGroupLectureType[]
  reviews: StudyGroupReviewType[]
}

export interface StudyGroupReviewType {
  id: number
  is_mine: boolean
  star_rating: number
  content: string
}
