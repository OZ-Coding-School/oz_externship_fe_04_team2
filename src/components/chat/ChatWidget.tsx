import { ChatBadge } from '@/components/chat/ChatBadge'
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
    <button
      onClick={handleClickWidget}
      className="bg-primary-500 fixed right-6 bottom-6 flex h-16 w-16 items-center justify-center rounded-full shadow-[0px_10px_15px_-3px_#0000001A,0px_4px_6px_-4px_#0000001A]"
    >
      {isOpen ? (
        <X className="h-6 w-6 text-white" />
      ) : (
        <MessageCircle className="h-6 w-6 text-white" />
      )}
      <ChatBadge count={unreadCount} className="absolute -top-2 -right-2" />
    </button>
  )
}
