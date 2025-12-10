import { axiosInstance } from '@/api/axios'
import { API_PATHS } from '@/constants'
import type {
  StudyGroupDetailType,
  StudyGroupSuccessResponseType,
  UpdateStudyGroupRequestType,
} from '@/types'

// 스터디 그룹 상세 조회
export const getStudyGroupDetail = async (groupId: number | string) => {
  const { data } = await axiosInstance.get<StudyGroupDetailType>(
    API_PATHS.STUDYGROUP.DETAIL(groupId)
  )
  return data
}

// 스터디 그룹 수정
export const updateStudyGroup = async (
  groupId: number | string,
  body: UpdateStudyGroupRequestType
) => {
  const { data } = await axiosInstance.patch<StudyGroupDetailType>(
    API_PATHS.STUDYGROUP.DETAIL(groupId),
    body
  )
  return data
}

// 스터디 그룹 삭제
export const deleteStudyGroup = async (groupId: number | string) => {
  const { data } = await axiosInstance.delete<StudyGroupSuccessResponseType>(
    API_PATHS.STUDYGROUP.DETAIL(groupId)
  )
  return data
}

// 스터디 그룹 나가기
export const leaveStudyGroup = async (groupId: number | string) => {
  const { data } = await axiosInstance.delete<StudyGroupSuccessResponseType>(
    API_PATHS.STUDYGROUP.LEAVE(groupId)
  )
  return data
}

// 리더 위임
export const delegateStudyGroupLeader = async (
  groupId: number | string,
  targetMemberId: number
) => {
  const { data } = await axiosInstance.post<StudyGroupSuccessResponseType>(
    API_PATHS.STUDYGROUP.DELEGATE_LEADER(groupId),
    { target_member_id: targetMemberId }
  )
  return data
}

// 멤버 추방
export const kickStudyGroupMember = async (
  groupId: number | string,
  memberId: number | string
) => {
  const { data } = await axiosInstance.delete<StudyGroupSuccessResponseType>(
    API_PATHS.STUDYGROUP.KICK_MEMBER(groupId, memberId)
  )
  return data
}
