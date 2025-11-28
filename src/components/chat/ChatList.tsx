import ChatHeader from '@/components/chat/ChatHeader'
import ChatRoomItem from '@/components/chat/ChatListItem'

import { mockChatRooms } from '@/mocks/data/mock-chatrooms'

interface ChatListPanelProps {
  activeRoomId: number | null
  onSelectRoom: (roomId: number) => void
}

export default function ChatListPanel({
  activeRoomId,
  onSelectRoom,
}: ChatListPanelProps) {
  return (
    <div className="flex flex-col">
      <ChatHeader title="채팅방" onClose={() => {}} />
      <ul className="flex-1 overflow-auto">
        {mockChatRooms.map((chatRoom) => (
          <ChatRoomItem
            key={chatRoom.id}
            chatRoom={chatRoom}
            isActive={activeRoomId === chatRoom.id}
            onClick={() => onSelectRoom(chatRoom.id)}
          />
        ))}
      </ul>
    </div>
  )
}
