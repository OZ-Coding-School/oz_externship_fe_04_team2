import { create } from 'zustand'

type ChatView = 'list' | 'room'

interface ChatState {
  isOpen: boolean
  currentView: ChatView
  selectedGroupId: number | null
  currentUserId: number | null
  toggleOpen: () => void
  openList: () => void
  openGroup: (groupId: number) => void
  setCurrentUserId: (userId: number) => void
  reset: () => void
}

export const useChatStore = create<ChatState>((set) => ({
  isOpen: false,
  currentView: 'list',
  selectedGroupId: null,
  currentUserId: 1, // 임시 사용자 (추후 로그인 연동)

  // 채팅 위젯 열기/닫기
  toggleOpen() {
    set((state) => {
      const nextIsOpen = !state.isOpen
      return nextIsOpen
        ? {
            isOpen: true,
          }
        : {
            isOpen: false,
            currentView: 'list',
            selectedGroupId: null,
          }
    })
  },

  // 채팅 리스트 화면 (채팅창에서 뒤로가기 클릭 시)
  openList: () =>
    set({
      isOpen: true,
      currentView: 'list',
      selectedGroupId: null,
    }),

  // 특정 채팅창으로 이동
  openGroup: (groupId) =>
    set({
      isOpen: true,
      currentView: 'room',
      selectedGroupId: groupId,
    }),

  // 현재 사용자 설정 (로그인 연동 시 사용)
  setCurrentUserId: (userId) => set({ currentUserId: userId }),

  // 채팅 UI 상태 전체 초기화
  reset: () =>
    set({
      isOpen: false,
      currentView: 'list',
      selectedGroupId: null,
      currentUserId: null,
    }),
}))
