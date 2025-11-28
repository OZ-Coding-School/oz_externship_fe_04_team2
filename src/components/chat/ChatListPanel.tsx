import ChatHeader from '@/components/chat/ChatHeader'
import ChatList from '@/components/chat/ChatList'
import { useState } from 'react'

interface ChatListPanelProps {
  onClose: () => void
}

export default function ChatListPanel({ onClose }: ChatListPanelProps) {
  const [activeRoomId, setActiveRoomId] = useState<number | null>(null)

  const handleSelectRoom = (roomId: number) => {
    setActiveRoomId(roomId)
    // 채팅창 연결 로직
  }

  return (
    <div className="flex h-full flex-col">
      <ChatHeader title="채팅방" onClose={onClose} />
      <ChatList activeRoomId={activeRoomId} onSelectRoom={handleSelectRoom} />
    </div>
  )
}
