import type { ChatParticipant } from '@/types'

export const mockChatParticipants: Record<number, ChatParticipant[]> = {
  1: [
    { id: 1, nickname: '김스터디', is_online: true, is_host: true },
    { id: 2, nickname: '김개발', is_online: true },
    { id: 3, nickname: '이프론트', is_online: false },
    { id: 4, nickname: '최자바', is_online: false },
  ],
}
