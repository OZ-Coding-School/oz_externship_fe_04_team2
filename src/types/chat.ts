// 채팅방 목록 응답
export interface ChatRoomListResponse {
  next: string | null
  previous: string | null
  results: ChatRoomListItem[]
}

// 채팅방 목록 아이템
export interface ChatRoomListItem {
  id: number
  name: string
  unread_message: number | null
  last_message: ChatRoomPreview | null
}

// 마지막 메시지 요약 정보
export interface ChatRoomPreview {
  id: number
  sender: {
    id: number
    nickname: string
  }
  content: string
  is_read: boolean
  created_at: string
}

// 특정 채팅방 메시지 목록 응답
export interface ChatMessageResponse {
  next: string | null
  previous: string | null
  results: ChatMessage[]
}

// 특정 채팅방 메시지 한 개
export interface ChatMessage {
  id: number
  sender: {
    id: number
    nickname: string
    profile_img_url: string
  }
  content: string
  created_at: string
}

// 채팅 참여자 (API 명세 확인 필요)
export interface ChatParticipant {
  id: number
  nickname: string
  is_online?: boolean
  is_host?: boolean
}
