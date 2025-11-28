import ChatRoomItem from '@/components/chat/ChatListItem'

import { mockChatRooms } from '@/mocks/data/mock-chatrooms'

interface ChatListPanelProps {
  activeRoomId: number | null
  onSelectRoom: (roomId: number) => void
}

export default function ChatList({
  activeRoomId,
  onSelectRoom,
}: ChatListPanelProps) {
  return (
    <ul className="flex-1 overflow-auto">
      {mockChatRooms.map((chatRoom) => (
        <ChatRoomItem
          key={chatRoom.id}
          chatRoom={chatRoom}
          isActive={activeRoomId === chatRoom.id}
          onClick={onSelectRoom}
        />
      ))}
    </ul>
  )
}
