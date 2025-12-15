import { ChatBadge, ChatListPanel, ChatRoomPanel } from '@/components/chat'
import {
  SocketStatus,
  useBodyScrollLock,
  useChatRooms,
  useChatSocket,
} from '@/hooks'
import { useChatStore } from '@/store'
import { MessageCircle, X } from 'lucide-react'

export function ChatWidget() {
  const {
    isOpen,
    currentView,
    selectedGroupId,
    toggleOpen,
    openGroup,
    openList,
    currentUserId,
  } = useChatStore()

  useBodyScrollLock(isOpen)

  const { chatRooms } = useChatRooms()

  // 추후 로그인 연동
  const mockAccessToken = 'MOCK_TOKEN'
  const { status, participants, messages, sendMessage } = useChatSocket({
    groupId: selectedGroupId ?? 0,
    accessToken: mockAccessToken,
  })

  // 클릭한 채팅방 찾기
  const selectedRoom =
    selectedGroupId != null
      ? chatRooms.find((room) => room.id === selectedGroupId)
      : null

  // 위젯 버튼 클릭
  const handleClickWidget = () => {
    toggleOpen()
  }

  // 리스트에서 채팅방 선택
  const handleSelectRoom = (groupId: number) => {
    openGroup(groupId)
  }

  // 채팅방에서 리스트로 돌아가기
  const handleBackToList = () => {
    openList()
  }

  // 패널 닫기
  const handleClosePanel = () => {
    toggleOpen()
  }

  // 채팅방 화면을 렌더링할 수 있는 조건
  const canRenderRoom =
    currentView === 'room' && selectedRoom && currentUserId !== null

  // 메세지 전송 핸들러
  const handleSendMessage = (message: string) => {
    sendMessage(message)
  }

  // 미읽음 메세지
  const unreadCount = 0

  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-2 flex h-96 w-80 flex-col overflow-hidden rounded-lg bg-white shadow-[0px_25px_50px_-12px_#00000040]">
          {/* 채팅 리스트 View */}
          {currentView === 'list' && (
            <ChatListPanel
              rooms={chatRooms}
              onClose={handleClosePanel}
              onSelectRoom={handleSelectRoom}
            />
          )}

          {/* 채팅방 View */}
          {canRenderRoom && status === SocketStatus.OPEN && (
            <ChatRoomPanel
              roomName={selectedRoom.name}
              participants={participants}
              messages={messages || []}
              currentUserId={currentUserId}
              onClose={handleClosePanel}
              onSend={handleSendMessage}
              onBack={handleBackToList}
            />
          )}
        </div>
      )}

      {/* 위젯 버튼 */}
      <button
        onClick={handleClickWidget}
        className="bg-primary-500 centralize relative h-16 w-16 rounded-full shadow-[0px_10px_15px_-3px_#0000001A,0px_4px_6px_-4px_#0000001A]"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageCircle className="h-6 w-6 text-white" />
        )}

        {/* 채팅 뱃지 */}
        <ChatBadge count={unreadCount} className="absolute -top-2 -right-2" />
      </button>
    </div>
  )
}
