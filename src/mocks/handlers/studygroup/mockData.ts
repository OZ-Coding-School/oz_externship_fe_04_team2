import type { StudyGroupResponseType } from '@/types'

export const mockStudyList: StudyGroupResponseType[] = [
  {
    id: 1,
    name: 'React 실무 프로젝트 스터디',
    is_leader: true,
    start_at: '2024-02-01',
    end_at: '2024-04-30',
    max_headcount: 10,
    current_headcount: 8,
    profile_img_url:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
    status: 'ONGOING',
    lectures: [
      { id: 101, title: 'React 완벽 마스터 강의', instructor: '김카엘' },
      { id: 102, title: 'Next.js 실전 가이드', instructor: '박프론트' },
    ],
    reviews: [],
  },
  {
    id: 2,
    name: 'Spring Boot 기초반',
    is_leader: false,
    start_at: '2023-11-01',
    end_at: '2024-01-31',
    max_headcount: 6,
    current_headcount: 4,
    profile_img_url:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4',
    status: 'PENDING',
    lectures: [{ id: 201, title: 'Spring Boot 입문', instructor: '최자바' }],
    reviews: [],
  },
  {
    id: 3,
    name: 'Vue.js 마스터 스터디',
    is_leader: false,
    start_at: '2023-08-01',
    end_at: '2023-11-30',
    max_headcount: 8,
    current_headcount: 6,
    profile_img_url:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3',
    status: 'ENDED',
    lectures: [{ id: 301, title: 'Vue.js 완벽 마스터', instructor: '이뷰' }],
    reviews: [],
  },
  {
    id: 4,
    name: 'TypeScript 심화 스터디',
    is_leader: false,
    start_at: '2023-09-01',
    end_at: '2023-12-15',
    max_headcount: 6,
    current_headcount: 5,
    profile_img_url:
      'https://images.unsplash.com/photo-1699885960867-56d5f5262d38',
    status: 'ENDED',
    lectures: [
      { id: 401, title: 'TypeScript 마스터', instructor: '한스크립트' },
    ],
    reviews: [
      { id: 99, is_mine: true, star_rating: 4, content: '좋았습니다.' },
    ],
  },
]
