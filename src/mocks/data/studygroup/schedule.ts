import type {
  StudyGroupMemberType,
  StudyScheduleDetailType,
  StudyScheduleListItemType,
} from '@/types'

export const mockScheduleParticipants: StudyGroupMemberType[] = [
  {
    id: 1,
    nickname: '김스터디',
    is_leader: true,
    profile_img_url: 'https://randomuser.me/api/portraits/lego/1.jpg',
  },
  {
    id: 2,
    nickname: '최자바',
    is_leader: false,
    profile_img_url: 'https://randomuser.me/api/portraits/lego/1.jpg',
  },
  {
    id: 3,
    nickname: '이프론트',
    is_leader: false,
    profile_img_url: 'https://randomuser.me/api/portraits/lego/1.jpg',
  },
]

// Mock 스케줄 데이터
export const mockSchedules: StudyScheduleDetailType[] = [
  {
    id: 1,
    group_id: 1,
    title: '파이썬 스터디 1회차',
    objective: '파이썬 자료형 마스터하기',
    session_date: '2025-11-20',
    start_time: '10:00',
    end_time: '11:00',
    created_at: '2025-11-15T10:00:00Z',
    updated_at: '2025-11-15T10:00:00Z',
    participants: [mockScheduleParticipants[0]],
  },
  {
    id: 2,
    group_id: 1,
    title: '파이썬 스터디 2회차',
    objective: '파이썬 for문 마스터하기',
    session_date: '2025-11-22',
    start_time: '14:00',
    end_time: '16:00',
    created_at: '2025-11-16T10:00:00Z',
    updated_at: '2025-11-16T10:00:00Z',
    participants: [mockScheduleParticipants[0], mockScheduleParticipants[2]],
  },
]

// 스케줄 상세 → 목록 변환
export const toScheduleListItem = (
  schedule: StudyScheduleDetailType
): StudyScheduleListItemType => ({
  id: schedule.id,
  title: schedule.title,
  session_date: schedule.session_date,
  start_time: schedule.start_time,
  end_time: schedule.end_time,
})
