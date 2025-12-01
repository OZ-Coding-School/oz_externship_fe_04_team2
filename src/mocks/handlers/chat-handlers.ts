import { API_PATHS } from '@/constants'
import { mockChatList } from '@/mocks/data/chat-list'
import { mockChatMessages } from '@/mocks/data/chat-messages'
import { http, HttpResponse } from 'msw'

// 채팅방 목록 조회 핸들러
export const getChatListHandler = http.get(API_PATHS.CHAT.ROOMS, () => {
  return HttpResponse.json({
    next: null,
    previous: null,
    results: mockChatList,
  })
})

// 특정 채팅방 메시지 목록
export const getChatMessagesHandler = http.get(
  API_PATHS.CHAT.MESSAGES(':groupId'),
  ({ params }) => {
    const groupId = Number(params.groupId)

    return HttpResponse.json({
      next: null,
      previous: null,
      results: mockChatMessages[groupId] ?? [],
    })
  }
)

export const chatHandlers = [getChatListHandler, getChatMessagesHandler]
