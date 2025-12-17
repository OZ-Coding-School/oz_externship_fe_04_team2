import { axiosInstance } from '@/api/axios'
import { API_PATHS } from '@/constants'
import type { ChatMessageResponse, ChatRoomListResponse } from '@/types/chat'

// 채팅방 목록 조회
// GET /api/v1/chatrooms
export async function fetchChatRooms(params?: {
  cursor?: string
  page_size?: number
}): Promise<ChatRoomListResponse> {
  const response = await axiosInstance.get<ChatRoomListResponse>(
    API_PATHS.CHAT.ROOMS,
    { params }
  )
  return response.data
}

// 특정 채팅방의 메시지 내역
// GET /api/v1/chatrooms/{group_id}/messages
export async function fetchChatMessages(
  groupId: number | string,
  params?: { cursor?: string; page_size?: number }
): Promise<ChatMessageResponse> {
  const response = await axiosInstance.get<ChatMessageResponse>(
    API_PATHS.CHAT.MESSAGES(groupId),
    { params }
  )
  return response.data
}

// 마지막으로 읽은 메시지 기록 업데이트
// POST /api/v1/chatroom/{group_id}/members/{member_id}/read
export async function updateLastReadMessage(
  groupId: number | string,
  memberId: number | string
): Promise<{ detail: string }> {
  const response = await axiosInstance.post<{ detail: string }>(
    API_PATHS.CHAT.MEMBER_READ(groupId, memberId)
  )
  return response.data
}
