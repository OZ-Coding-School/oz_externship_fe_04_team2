import { mockChatParticipants } from '@/mocks/data/chat-participants'
import type { ChatParticipant } from '@/types/chat'

export function useChatParticipants(groupId: number | null): {
  participants: ChatParticipant[]
} {
  if (!groupId) return { participants: [] }
  return { participants: mockChatParticipants[groupId] ?? [] }
}
