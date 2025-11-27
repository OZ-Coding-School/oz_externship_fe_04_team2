export interface ChatRoomListResponse {
  next: string | null
  previous: string | null
  results: ChatRoomListItem[]
}

export interface ChatRoomListItem {
  id: number
  name: string
  last_message?: {
    id: number
    sender: {
      id: number
      nickname: string
    }
    content: string
    is_read: boolean
    created_at: string
  }
}
