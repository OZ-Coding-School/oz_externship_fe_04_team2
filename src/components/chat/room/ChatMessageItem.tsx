import { CHAT_BUBBLE } from '@/constants'
import type { ChatMessage } from '@/types/chat'
import { formatChatTime } from '@/utils/format-date'

interface ChatMessageItemProps {
  message: ChatMessage
  currentUserId: number
}

export default function ChatMessageItem({
  message,
  currentUserId,
}: ChatMessageItemProps) {
  const isOutgoing = message.sender.id === currentUserId
  const timeLabel = formatChatTime(message.created_at)

  // 내 메시지
  if (isOutgoing) {
    return (
      <li className="flex max-w-[80%] flex-col gap-1 self-end">
        <p className={CHAT_BUBBLE.outgoing}>{message.content}</p>
        <span className="text-custom-gray-500 text-end text-xs">
          {timeLabel}
        </span>
      </li>
    )
  }

  // 상대 메시지
  return (
    <li className="flex max-w-[80%] flex-col gap-1 self-start">
      <span className="text-custom-gray-600 text-xs">
        {message.sender.nickname}
      </span>
      <p className={CHAT_BUBBLE.incoming}>{message.content}</p>
      <span className="text-custom-gray-500 text-xs">{timeLabel}</span>
    </li>
  )
}
