import type { ChatRoomListItem } from '@/types/chat'

export const mockChatRooms: ChatRoomListItem[] = [
  {
    id: 1,
    name: 'React 실무 프로젝트 스터디',
    last_message: {
      id: 11,
      sender: { id: 1, nickname: '김개발' },
      content: '내일 미팅 시간 변경 가능하신가요?',
      is_read: false,
      created_at: '2025-01-15T10:05:00',
    },
  },
  {
    id: 2,
    name: 'Python 데이터 분석 스터디',
  },
  {
    id: 3,
    name: 'AWS 클라우드 아키텍처 스터디',
    last_message: {
      id: 12,
      sender: { id: 2, nickname: '박클라우드' },
      content: '좋은 자료 감사합니다',
      is_read: true,
      created_at: '2025-01-15T09:30:00',
    },
  },
  {
    id: 4,
    name: 'Node.js 백엔드 개발팀',
    last_message: {
      id: 13,
      sender: { id: 3, nickname: '최서버' },
      content: '다들 수고하셨습니다!',
      is_read: true,
      created_at: '2025-01-14T18:20:00',
    },
  },
]
