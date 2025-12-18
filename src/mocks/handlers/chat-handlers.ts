import { API_PATHS } from '@/constants'
import { mockChatList, mockChatMessages } from '@/mocks/data'
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
  ({ params, request }) => {
    const groupId = Number(params.groupId)
    const url = new URL(request.url)
    const cursor = url.searchParams.get('cursor')
    const pageSize = Number(url.searchParams.get('page_size')) || 10

    const allMessages = mockChatMessages[groupId] ?? []
    const end = cursor ? Number(cursor) : allMessages.length
    const start = Math.max(0, end - pageSize)

    return HttpResponse.json({
      next: start
        ? `http://localhost/api/v1/chatrooms/${groupId}/messages?cursor=${start}`
        : null,
      previous: null,
      results: allMessages.slice(start, end),
    })
  }
)

export const chatHandlers = [getChatListHandler, getChatMessagesHandler]
