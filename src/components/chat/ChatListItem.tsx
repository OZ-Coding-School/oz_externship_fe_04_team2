import type { ChatRoomListItem } from '@/types/chat'
import { formatChatListDate } from '@/utils/format-date'

interface ChatRoomItemProps {
  chatRoom: ChatRoomListItem
  unreadCount?: number
  isActive?: boolean
  onClick?: () => void
}

export default function ChatListItem({
  chatRoom,
  isActive = false,
  onClick,
}: ChatRoomItemProps) {
  const latestMessage = chatRoom.last_message

  const previewMessage = latestMessage
    ? `${latestMessage.sender.nickname}: ${latestMessage.content}`
    : `(대화가 없습니다. 대화를 시작해보세요.)`

  const dateLabel = latestMessage
    ? formatChatListDate(latestMessage.created_at)
    : ''

  return (
    <li>
      <button type="button" onClick={onClick} className="">
        <span>{chatRoom.name}</span>
        <span>{dateLabel}</span>
        <span>{previewMessage}</span>
      </button>
    </li>
  )
}
