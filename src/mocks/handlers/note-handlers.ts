import { MSW_BASE_URL } from '@/constants'
import {
  mockNoteAuthors,
  mockNotes,
  toNoteListItem,
  type StudyNoteMockType,
} from '@/mocks/data'
import type {
  CreateStudyNoteRequestType,
  StudyNoteDetailType,
  StudyNoteListResponseType,
  StudyNoteSuccessResponseType,
  UpdateStudyNoteRequestType,
  UpdateStudyNoteResponseType,
} from '@/types'
import { http, HttpResponse } from 'msw'

// 노트 id 증가 유틸
const getNextNoteId = () =>
  mockNotes.length ? Math.max(...mockNotes.map((note) => note.id)) + 1 : 1

// 파일 id 증가 유틸
let fileIdCounter = 10 // mock 데이터의 기존 파일 id와 충돌 방지
const getNextFileId = () => fileIdCounter++

// 노트 목록 조회
export const getStudyNotesHandler = http.get(
  `${MSW_BASE_URL}/api/v1/study-groups/:groupId/notes`,
  ({ params, request }) => {
    const { groupId } = params
    const url = new URL(request.url)

    const pageParam = url.searchParams.get('page')
    const pageSizeParam = url.searchParams.get('page_size')

    const page = pageParam ? Number(pageParam) : 1
    const pageSize = pageSizeParam ? Number(pageSizeParam) : 10
    const groupIdNumber = Number(groupId)

    // 해당 그룹의 노트만 필터링
    const groupNotes = mockNotes.filter(
      (note) => note.group_id === groupIdNumber
    )

    const totalCount = groupNotes.length
    const startIndex = (page - 1) * pageSize
    const endIndex = startIndex + pageSize

    const paginatedNotes = groupNotes.slice(startIndex, endIndex)

    const hasNext = endIndex < totalCount
    const hasPrevious = page > 1

    const basePath = `/api/v1/study-groups/${groupId}/notes`
    const next = hasNext
      ? `${basePath}?page=${page + 1}&page_size=${pageSize}`
      : null
    const previous = hasPrevious
      ? `${basePath}?page=${page - 1}&page_size=${pageSize}`
      : null

    const response: StudyNoteListResponseType = {
      count: totalCount,
      next,
      previous,
      results: paginatedNotes.map(toNoteListItem),
    }

    return HttpResponse.json(response, { status: 200 })
  }
)

// 노트 상세 조회
export const getStudyNoteDetailHandler = http.get(
  `${MSW_BASE_URL}/api/v1/study-groups/:groupId/notes/:noteId`,
  ({ params }) => {
    const { groupId, noteId } = params
    const groupIdNumber = Number(groupId)
    const noteIdNumber = Number(noteId)

    const note = mockNotes.find(
      (note) => note.group_id === groupIdNumber && note.id === noteIdNumber
    )

    if (!note) {
      return HttpResponse.json(
        { error_detail: '스터디 학습 기록을 찾을 수 없습니다.' },
        { status: 404 }
      )
    }

    // group_id는 mock 내부에서만 사용하고 응답에서는 제외
    const { group_id: _groupId, ...noteDetail } = note
    return HttpResponse.json<StudyNoteDetailType>(noteDetail, { status: 200 })
  }
)

// 노트 생성
export const createStudyNoteHandler = http.post(
  `${MSW_BASE_URL}/api/v1/study-groups/:groupId/notes`,
  async ({ request, params }) => {
    const { groupId } = params
    const body = (await request.json()) as CreateStudyNoteRequestType
    const groupIdNumber = Number(groupId)
    const now = new Date().toISOString()
    const id = getNextNoteId()

    const filesWithId = body.files.map((file) => ({
      id: getNextFileId(),
      file_name: file.file_name,
      file_url: file.file_url,
    }))

    const newNote: StudyNoteMockType = {
      id,
      group_id: groupIdNumber,
      title: body.title,
      author: mockNoteAuthors[0], // 로그인 유저라고 가정
      content: body.content,
      ai_summary:
        '이 학습 기록은 React Hooks의 주요 개념과 실습 내용을 다루고 있습니다.',
      files: filesWithId,
      created_at: now,
      updated_at: now,
    }

    mockNotes.push(newNote)

    const response: StudyNoteSuccessResponseType = {
      detail: '스터디 학습 기록 작성에 성공했습니다.',
    }

    return HttpResponse.json(response, { status: 200 })
  }
)

// 노트 수정
export const updateStudyNoteHandler = http.patch(
  `${MSW_BASE_URL}/api/v1/study-groups/:groupId/notes/:noteId`,
  async ({ request, params }) => {
    const { groupId, noteId } = params
    const groupIdNumber = Number(groupId)
    const noteIdNumber = Number(noteId)
    const body = (await request.json()) as UpdateStudyNoteRequestType

    const index = mockNotes.findIndex(
      (note) => note.group_id === groupIdNumber && note.id === noteIdNumber
    )

    if (index === -1) {
      return HttpResponse.json(
        { error_detail: '스터디 학습 기록을 찾을 수 없습니다.' },
        { status: 404 }
      )
    }

    const existing = mockNotes[index]
    const now = new Date().toISOString()

    const filesWithId = body.files
      ? body.files.map((file) => ({
          id: getNextFileId(),
          file_name: file.file_name,
          file_url: file.file_url,
        }))
      : existing.files

    const updated: StudyNoteMockType = {
      ...existing,
      title: body.title ?? existing.title,
      content: body.content ?? existing.content,
      files: filesWithId,
      updated_at: now,
    }

    mockNotes[index] = updated

    const response: UpdateStudyNoteResponseType = {
      id: updated.id,
      title: updated.title,
      content: updated.content,
      files: updated.files,
      updated_at: updated.updated_at,
    }

    return HttpResponse.json(response, { status: 200 })
  }
)

// 노트 삭제
export const deleteStudyNoteHandler = http.delete(
  `${MSW_BASE_URL}/api/v1/study-groups/:groupId/notes/:noteId`,
  ({ params }) => {
    const { groupId, noteId } = params
    const groupIdNumber = Number(groupId)
    const noteIdNumber = Number(noteId)

    const index = mockNotes.findIndex(
      (note) => note.group_id === groupIdNumber && note.id === noteIdNumber
    )

    if (index === -1) {
      return HttpResponse.json(
        { error_detail: '스터디 학습 기록을 찾을 수 없습니다.' },
        { status: 404 }
      )
    }

    mockNotes.splice(index, 1)

    const response: StudyNoteSuccessResponseType = {
      detail: '스터디 학습 기록 삭제에 성공했습니다.',
    }

    return HttpResponse.json(response, { status: 200 })
  }
)

export const noteHandlers = [
  getStudyNotesHandler,
  getStudyNoteDetailHandler,
  createStudyNoteHandler,
  updateStudyNoteHandler,
  deleteStudyNoteHandler,
]
