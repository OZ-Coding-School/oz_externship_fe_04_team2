import { mockScheduleParticipants, mockStudyList } from '@/mocks/data'
import type {
  DelegateLeaderRequestType,
  StudyGroupDetailType,
  UpdateStudyGroupRequestType,
  UpdateStudyGroupResponseType,
} from '@/types'
import { http, HttpResponse } from 'msw'

// 상세 조회
export const getStudyGroupDetailHandler = http.get(
  '/api/v1/study-groups/:groupId',
  ({ params }) => {
    const groupId = Number(params.groupId)
    const studyGroup = mockStudyList.find(
      (studyGroupItem) => studyGroupItem.id === groupId
    )

    if (!studyGroup) {
      return HttpResponse.json(
        { error_detail: '스터디 그룹을 찾을 수 없습니다.' },
        { status: 404 }
      )
    }

    const detailStudyGroup: StudyGroupDetailType = {
      id: studyGroup.id,
      name: studyGroup.name,
      introduction: `${studyGroup.name}입니다. 함께 성장해유~ ^00^!`,
      start_at: studyGroup.start_at,
      end_at: studyGroup.end_at,
      max_headcount: studyGroup.max_headcount,
      current_headcount: studyGroup.current_headcount,
      profile_img_url: studyGroup.profile_img_url,
      status: studyGroup.status,
      lectures: studyGroup.lectures.map((lecture) => ({
        ...lecture,
        thumbnail_img_url:
          'https://cdn.inflearn.com/public/files/courses/328340/cover/01jx9xv8sprqfcjdkhy723nw9y?f=avif&w=420',
        url_link: 'https://www.inflearn.com',
      })),
      members: mockScheduleParticipants,
    }

    return HttpResponse.json(detailStudyGroup, { status: 200 })
  }
)

// 수정
export const updateStudyGroupHandler = http.patch(
  '/api/v1/study-groups/:groupId',
  async ({ params, request }) => {
    const groupId = Number(params.groupId)
    const body = (await request.json()) as UpdateStudyGroupRequestType

    const studyGroupIndex = mockStudyList.findIndex(
      (studyGroupItem) => studyGroupItem.id === groupId
    )

    if (studyGroupIndex === -1) {
      return HttpResponse.json(
        { error_detail: '스터디 그룹을 찾을 수 없습니다.' },
        { status: 404 }
      )
    }

    const existingStudyGroup = mockStudyList[studyGroupIndex]

    // 기존 데이터 업데이트
    const updatedStudyGroup = {
      ...existingStudyGroup,
      name: body.name ?? existingStudyGroup.name,
      start_at: body.start_at ?? existingStudyGroup.start_at,
      end_at: body.end_at ?? existingStudyGroup.end_at,
      max_headcount: body.max_headcount ?? existingStudyGroup.max_headcount,
      profile_img_url:
        body.profile_img_url ?? existingStudyGroup.profile_img_url,
    }

    mockStudyList[studyGroupIndex] = updatedStudyGroup

    // 상세 응답 형태로 반환
    const updateResponse: UpdateStudyGroupResponseType = {
      id: updatedStudyGroup.id,
      name: updatedStudyGroup.name,
      introduction:
        body.introduction ??
        `${updatedStudyGroup.name}입니다. 함께 성장해유~ ^00^!`,
      start_at: updatedStudyGroup.start_at,
      end_at: updatedStudyGroup.end_at,
      max_headcount: updatedStudyGroup.max_headcount,
      profile_img_url: updatedStudyGroup.profile_img_url,
      status: updatedStudyGroup.status,
      lectures: updatedStudyGroup.lectures.map((lecture) => ({
        ...lecture,
        thumbnail_img_url:
          'https://cdn.inflearn.com/public/files/courses/328340/cover/01jx9xv8sprqfcjdkhy723nw9y?f=avif&w=420',
        url_link: 'https://www.inflearn.com',
      })),
    }

    return HttpResponse.json(updateResponse, { status: 200 })
  }
)

// 삭제
export const deleteStudyGroupHandler = http.delete(
  '/api/v1/study-groups/:groupId',
  ({ params }) => {
    const groupId = Number(params.groupId)
    const studyGroupIndex = mockStudyList.findIndex(
      (studyGroupItem) => studyGroupItem.id === groupId
    )

    if (studyGroupIndex === -1) {
      return HttpResponse.json(
        { error_detail: '스터디 그룹을 찾을 수 없습니다.' },
        { status: 404 }
      )
    }

    mockStudyList.splice(studyGroupIndex, 1)

    return HttpResponse.json(
      { detail: '스터디 그룹이 삭제되었습니다.' },
      { status: 200 }
    )
  }
)

// 리더 위임
export const delegateLeaderHandler = http.post(
  '/api/v1/study-groups/:groupId/delegate-leader',
  async ({ params, request }) => {
    const groupId = Number(params.groupId)
    const body = (await request.json()) as DelegateLeaderRequestType

    const studyGroup = mockStudyList.find(
      (studyGroupItem) => studyGroupItem.id === groupId
    )

    if (!studyGroup) {
      return HttpResponse.json(
        { error_detail: '스터디 그룹을 찾을 수 없습니다.' },
        { status: 404 }
      )
    }

    if (!body.target_member_id) {
      return HttpResponse.json(
        { error_detail: '해당 멤버를 찾을 수 없습니다.' },
        { status: 404 }
      )
    }

    return HttpResponse.json(
      { detail: '리더 권한이 위임되었습니다.' },
      { status: 200 }
    )
  }
)

// 나가기
export const leaveStudyGroupHandler = http.delete(
  '/api/v1/study-groups/:groupId/members/me',
  ({ params }) => {
    const groupId = Number(params.groupId)
    const studyGroup = mockStudyList.find(
      (studyGroupItem) => studyGroupItem.id === groupId
    )

    if (!studyGroup) {
      return HttpResponse.json(
        { error_detail: '스터디 그룹을 찾을 수 없습니다.' },
        { status: 404 }
      )
    }

    // 실제 API는 로그인 유저 기준으로 판단, 핸들러에서는 목록 mock의 is_leader 활용
    if (studyGroup.is_leader) {
      return HttpResponse.json(
        {
          error_detail:
            '리더는 다른 멤버에게 리더 권한을 위임하고 나가야 합니다.',
        },
        { status: 400 }
      )
    }

    return HttpResponse.json(
      { detail: '스터디 그룹에서 나가기에 성공하였습니다.' },
      { status: 200 }
    )
  }
)

// 멤버 추방
export const kickMemberHandler = http.delete(
  '/api/v1/study-groups/:groupId/members/:memberId',
  ({ params }) => {
    const groupId = Number(params.groupId)
    const memberId = Number(params.memberId)

    const studyGroup = mockStudyList.find(
      (studyGroupItem) => studyGroupItem.id === groupId
    )

    if (!studyGroup) {
      return HttpResponse.json(
        { error_detail: '스터디 그룹을 찾을 수 없습니다.' },
        { status: 404 }
      )
    }

    const member = mockScheduleParticipants.find((m) => m.id === memberId)
    if (!member) {
      return HttpResponse.json(
        { error_detail: '해당 멤버를 찾을 수 없습니다.' },
        { status: 404 }
      )
    }

    return HttpResponse.json(
      { detail: '스터디 그룹에서 멤버를 추방하는데 성공했습니다.' },
      { status: 200 }
    )
  }
)

export const studygroupDetailHandlers = [
  getStudyGroupDetailHandler,
  updateStudyGroupHandler,
  deleteStudyGroupHandler,
  delegateLeaderHandler,
  leaveStudyGroupHandler,
  kickMemberHandler,
]
