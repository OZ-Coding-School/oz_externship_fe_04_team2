export type StudyNoteMode = 'create' | 'edit' | 'detail'

// 작성자 정보
export interface StudyNoteAuthorType {
  id: number
  nickname: string
  profile_img_url: string
}

// 첨부파일 정보 (응답)
export interface StudyNoteFileResponseType {
  id: number
  file_name: string
  file_url: string
}

// 첨부파일 정보 (요청)
export interface StudyNoteFileRequestType {
  file_name: string
  file_url: string
}

// 목록 아이템
export interface StudyNoteListItemType {
  id: number
  author: StudyNoteAuthorType
  title: string
  created_at: string
}

// 목록 조회 응답
export interface StudyNoteListResponseType {
  count: number
  next: string | null
  previous: string | null
  results: StudyNoteListItemType[]
}

// 상세 조회 응답
export interface StudyNoteDetailType {
  id: number
  title: string
  author: StudyNoteAuthorType
  content: string
  ai_summary: string
  files: StudyNoteFileResponseType[]
  created_at: string
  updated_at: string
}

// 생성 요청 (POST)
export interface CreateStudyNoteRequestType {
  title: string
  content: string
  images: string[]
  files: StudyNoteFileRequestType[]
}

// 수정 요청 (PATCH)
export interface UpdateStudyNoteRequestType {
  title?: string
  content?: string
  images?: string[]
  files?: StudyNoteFileRequestType[]
}

// 수정 응답
export interface UpdateStudyNoteResponseType {
  id: number
  title: string
  content: string
  files: StudyNoteFileResponseType[]
  updated_at: string
}

//  성공 메시지 응답
export interface StudyNoteSuccessResponseType {
  detail: string
}
