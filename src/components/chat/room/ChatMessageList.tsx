import { ChatMessageItem } from '@/components/chat'
import type { ChatMessage } from '@/types'

interface ChatMessageListProps {
  messages: ChatMessage[]
  currentUserId: number
}

export function ChatMessageList({
  messages,
  currentUserId,
}: ChatMessageListProps) {
  return (
    <ul className="flex h-full flex-col gap-3 overflow-y-auto p-4">
      {messages.map((msg) => (
        <ChatMessageItem
          key={msg.id}
          message={msg}
          currentUserId={currentUserId}
        />
      ))}
    </ul>
  )
}
