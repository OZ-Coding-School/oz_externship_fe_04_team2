export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

export const API_PATHS = {
  USER: {
    // 유저 정보를 가져오는 api
    GET: '/api/v1/accounts/me',
  },
  CHAT: {
    ROOMS: '/api/v1/chatrooms',
    MESSAGES: (group_id: number | string) =>
      `/api/v1/chatrooms/${group_id}/messages`,
    READ: (group_id: number | string, member_id: number | string) =>
      `/api/v1/chatroom/${group_id}/members/${member_id}/read`,
  },
} as const
