import { mockChatParticipants } from '@/mocks/data'
import type { ChatParticipant } from '@/types'

export function useChatParticipants(groupId: number | null): {
  participants: ChatParticipant[]
} {
  if (!groupId) return { participants: [] }
  return { participants: mockChatParticipants[groupId] ?? [] }
}
