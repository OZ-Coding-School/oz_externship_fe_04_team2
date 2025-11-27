import { create } from 'zustand'

interface ChatState {
  unreadCount: number
  setUnreadCount: (count: number) => void
  isOpen: boolean
  toggleOpen: () => void
}

export const useChatStore = create<ChatState>((set) => ({
  unreadCount: 1,
  setUnreadCount: (count) => set({ unreadCount: count }),

  isOpen: false,
  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}))
