import { ChatMessageItem } from '@/components/chat'
import { useAutoScrollToBottom } from '@/hooks'
import type { ChatMessage } from '@/types'

interface ChatMessageListProps {
  messages: ChatMessage[]
  currentUserId: number
}

export function ChatMessageList({
  messages,
  currentUserId,
}: ChatMessageListProps) {
  const { containerRef, bottomRef } = useAutoScrollToBottom(messages.length, {
    onlyIfAtBottom: false,
    behavior: 'auto',
  })

  return (
    <div
      ref={containerRef}
      className="flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto p-4"
    >
      {messages.map((msg) => (
        <ChatMessageItem
          key={msg.id}
          message={msg}
          currentUserId={currentUserId}
        />
      ))}
      <div ref={bottomRef} className="h-0"></div>
    </div>
  )
}
