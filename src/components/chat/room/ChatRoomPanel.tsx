import { ChatHeader } from '@/components/chat/common'
import { ChatMessageList } from '@/components/chat/room/ChatMessageList'
import { ChatParticipants } from '@/components/chat/room/ChatParticipants'
import { ChatRoomInput } from '@/components/chat/room/ChatRoomInput'
import type { ChatMessage, ChatParticipant } from '@/types/chat'

interface ChatRoomPanelProps {
  roomName: string
  participants: ChatParticipant[]
  messages: ChatMessage[]
  currentUserId: number
  onClose: () => void
  onSend: (message: string) => void
  onBack: () => void
}

export function ChatRoomPanel({
  roomName,
  participants,
  messages,
  currentUserId,
  onClose,
  onSend,
  onBack,
}: ChatRoomPanelProps) {
  const onlineCount = participants.filter(
    (participant) => participant.is_online
  ).length

  return (
    <>
      <ChatHeader
        title={roomName}
        onlineCount={onlineCount}
        onClose={onClose}
        onBack={onBack}
        showBackButton
      />
      <ChatParticipants members={participants} />
      <ChatMessageList messages={messages} currentUserId={currentUserId} />
      <ChatRoomInput onSend={onSend} />
    </>
  )
}
