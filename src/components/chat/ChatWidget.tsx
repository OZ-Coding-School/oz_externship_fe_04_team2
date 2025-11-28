import { ChatBadge } from '@/components/chat/ChatBadge'
import ChatListPanel from '@/components/chat/ChatListPanel'

import { useChatStore } from '@/store/useChatStore'
import { MessageCircle, X } from 'lucide-react'

export default function ChatWidget() {
  const unreadCount = useChatStore((state) => state.unreadCount)
  const isOpen = useChatStore((state) => state.isOpen)
  const toggleOpen = useChatStore((state) => state.toggleOpen)

  const handleClickWidget = () => {
    toggleOpen()
  }

  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col items-end">
      {/* 채팅 패널 */}
      {isOpen && (
        <div className="mb-2 flex h-[384px] w-[320px] flex-col overflow-hidden rounded-lg bg-white shadow-[0px_25px_50px_-12px_#00000040]">
          <ChatListPanel onClose={toggleOpen} />
        </div>
      )}

      {/* 위젯 버튼 */}
      <button
        onClick={handleClickWidget}
        className="bg-primary-500 relative flex h-16 w-16 items-center justify-center rounded-full shadow-[0px_10px_15px_-3px_#0000001A,0px_4px_6px_-4px_#0000001A]"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageCircle className="h-6 w-6 text-white" />
        )}

        {/* 채팅 뱃지 */}
        <ChatBadge count={unreadCount} className="absolute -top-2 -right-2" />
      </button>
    </div>
  )
}
