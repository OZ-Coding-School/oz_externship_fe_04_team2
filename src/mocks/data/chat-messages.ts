import type { ChatMessage } from '@/types'

export const mockChatMessages: Record<number, ChatMessage[]> = {
  1: [
    {
      id: 1,
      sender: {
        id: 1,
        nickname: '김스터디',
        profile_img_url: 'https://randomuser.me/api/portraits/lego/1.jpg',
      },
      content: '안녕하세요! 스터디 시작해볼까요?',
      created_at: '2025-01-15T09:00:00',
    },
    {
      id: 2,
      sender: {
        id: 4,
        nickname: '최자바',
        profile_img_url: 'https://randomuser.me/api/portraits/lego/1.jpg',
      },
      content: '네, 좋습니다! 오늘 진도는 어디까지 할 예정인가요?',
      created_at: '2025-01-15T09:05:00',
    },
    {
      id: 3,
      sender: {
        id: 1,
        nickname: '김스터디',
        profile_img_url: 'https://randomuser.me/api/portraits/lego/1.jpg',
      },
      content: 'React hooks 부분까지 해보려고 합니다',
      created_at: '2025-01-15T09:10:00',
    },
    {
      id: 4,
      sender: {
        id: 4,
        nickname: '최자바',
        profile_img_url: 'https://randomuser.me/api/portraits/lego/1.jpg',
      },
      content: '좋네요! 저도 준비해왔습니다',
      created_at: '2025-01-15T09:15:00',
    },
    {
      id: 5,
      sender: {
        id: 1,
        nickname: '김스터디',
        profile_img_url: 'https://randomuser.me/api/portraits/lego/1.jpg',
      },
      content: '그럼 시작해볼까요? 화면 공유 준비됐나요?',
      created_at: '2025-01-15T09:20:00',
    },
    {
      id: 6,
      sender: {
        id: 3,
        nickname: '이프론트',
        profile_img_url: 'https://randomuser.me/api/portraits/lego/1.jpg',
      },
      content: '네, 준비 완료입니다!',
      created_at: '2025-01-15T09:22:00',
    },
    {
      id: 7,
      sender: {
        id: 1,
        nickname: '김스터디',
        profile_img_url: 'https://randomuser.me/api/portraits/lego/1.jpg',
      },
      content: '내일 미팅 시간 변경 가능하신가요?',
      created_at: '2025-01-15T14:30:00',
    },
  ],
  2: [],
  3: [],
  4: [],
}
