import ChatHeader from '@/components/chat/common/ChatHeader'
import ChatList from '@/components/chat/list/ChatList'

import type { ChatRoomListItem } from '@/types/chat'
import { useState } from 'react'

interface ChatListPanelProps {
  rooms: ChatRoomListItem[]
  onClose: () => void
  onSelectRoom: (roomId: number) => void
}

export default function ChatListPanel({
  rooms,
  onClose,
  onSelectRoom,
}: ChatListPanelProps) {
  const [activeRoomId, setActiveRoomId] = useState<number | null>(null)

  const handleSelectRoom = (roomId: number) => {
    setActiveRoomId(roomId)
    onSelectRoom(roomId)
  }

  const hasNoRooms = rooms.length === 0

  return (
    <div className="flex h-full flex-col">
      <ChatHeader title="채팅방" onClose={onClose} />
      {hasNoRooms ? (
        <div className="text-custom-gray-600 flex flex-1 flex-col items-center justify-center gap-1 text-sm">
          <p>현재 참여 중인 채팅방이 없습니다.</p>
          <p>스터디에 들어가면 채팅방이 생깁니다.</p>
        </div>
      ) : (
        <div className="scroll-hide flex-1 overflow-y-auto">
          <ChatList
            rooms={rooms}
            activeRoomId={activeRoomId}
            onSelectRoom={handleSelectRoom}
          />
        </div>
      )}
    </div>
  )
}
