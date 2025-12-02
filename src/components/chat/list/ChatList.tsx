import { ChatListItem } from '@/components/chat'
import type { ChatRoomListItem } from '@/types'

interface ChatListProps {
  rooms: ChatRoomListItem[]
  activeRoomId: number | null
  onSelectRoom: (roomId: number) => void
}

export function ChatList({ rooms, activeRoomId, onSelectRoom }: ChatListProps) {
  return (
    <ul>
      {rooms.map((chatRoom) => (
        <ChatListItem
          key={chatRoom.id}
          chatRoom={chatRoom}
          isActive={activeRoomId === chatRoom.id}
          onClick={onSelectRoom}
        />
      ))}
    </ul>
  )
}
