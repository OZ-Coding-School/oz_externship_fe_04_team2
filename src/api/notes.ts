import { axiosInstance } from '@/api/axios'
import { API_PATHS } from '@/constants'
import type {
  CreateStudyNoteRequestType,
  StudyNoteDetailType,
  StudyNoteListResponseType,
  StudyNoteSuccessResponseType,
  UpdateStudyNoteRequestType,
  UpdateStudyNoteResponseType,
} from '@/types'

// 스터디 노트 목록 조회 API / GET
export const getStudyNotes = async (
  groupId: number | string,
  page?: number,
  pageSize?: number
) => {
  const { data } = await axiosInstance.get<StudyNoteListResponseType>(
    API_PATHS.STUDYNOTE.LIST(groupId),
    {
      params: {
        page,
        page_size: pageSize,
      },
    }
  )
  return data
}

// 스터디 노트 상세 조회 API / GET
export const getStudyNoteDetail = async (
  groupId: number | string,
  noteId: number | string
) => {
  const { data } = await axiosInstance.get<StudyNoteDetailType>(
    API_PATHS.STUDYNOTE.DETAIL(groupId, noteId)
  )
  return data
}

// 스터디 노트 생성 API / POST
export const createStudyNote = async (
  groupId: number | string,
  body: CreateStudyNoteRequestType
) => {
  const { data } = await axiosInstance.post<StudyNoteSuccessResponseType>(
    API_PATHS.STUDYNOTE.LIST(groupId),
    body
  )
  return data
}

// 스터디 노트 수정 API / PATCH
export const updateStudyNote = async (
  groupId: number | string,
  noteId: number | string,
  body: UpdateStudyNoteRequestType
) => {
  const { data } = await axiosInstance.patch<UpdateStudyNoteResponseType>(
    API_PATHS.STUDYNOTE.DETAIL(groupId, noteId),
    body
  )
  return data
}

// 스터디 노트 삭제 API / DELETE
export const deleteStudyNote = async (
  groupId: number | string,
  noteId: number | string
) => {
  const { data } = await axiosInstance.delete<StudyNoteSuccessResponseType>(
    API_PATHS.STUDYNOTE.DETAIL(groupId, noteId)
  )
  return data
}
