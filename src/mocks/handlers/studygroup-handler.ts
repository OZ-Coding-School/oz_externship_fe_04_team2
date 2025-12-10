import { http, HttpResponse } from 'msw'
import { mockStudyList } from '@/mocks/data/studygroup'
import { API_PATHS } from '@/constants'
import type { StudyGroupDetailType } from '@/types'

export const studygroupHandler = [
  http.get(API_PATHS.STUDYGROUP.LIST, () => {
    return HttpResponse.json(mockStudyList)
  }),
]

// 상세 조회
export const getStudyGroupDetailHandler = http.get(
  '/api/v1/study-groups/:groupId',
  ({ params }) => {
    const groupId = Number(params.groupId)
    const group = mockStudyList.find((group) => group.id === groupId)

    if (!group) {
      return HttpResponse.json(
        { error_detail: '스터디 그룹을 찾을 수 없습니다.' },
        { status: 404 }
      )
    }

    const detailStudyGroup: StudyGroupDetailType = {
      id: group.id,
      name: group.name,
      introduction: `${group.name}입니다. 함께 성장해요!`,
      start_at: group.start_at,
      end_at: group.end_at,
      max_headcount: group.max_headcount,
      current_headcount: group.current_headcount,
      profile_img_url: group.profile_img_url,
      status: group.status,
      lectures: group.lectures.map((lecture) => ({
        ...lecture,
        thumbnail_img_url:
          'https://cdn.inflearn.com/public/files/courses/328340/cover/01jx9xv8sprqfcjdkhy723nw9y?f=avif&w=420',
        url_link: 'https://www.inflearn.com',
      })),
      members: [
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
          profile_img_url: 'https://randomuser.me/api/portraits/lego/2.jpg',
        },
        {
          id: 3,
          nickname: '이프론트',
          is_leader: false,
          profile_img_url: 'https://randomuser.me/api/portraits/lego/3.jpg',
        },
      ],
    }

    return HttpResponse.json(detailStudyGroup, { status: 200 })
  }
)
