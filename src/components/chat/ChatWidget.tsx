import { ChatBadge } from '@/components/chat/common/ChatBadge'
import ChatListPanel from '@/components/chat/list/ChatListPanel'
import ChatRoomPanel from '@/components/chat/room/ChatRoomPanel'
import { useChatMessages, useChatRooms } from '@/hooks/chat'
import { useChatParticipants } from '@/hooks/chat/useChatParticipants'
import useBodyScrollLock from '@/hooks/common/useBodyScrollLock'
import { useChatStore } from '@/store/useChatStore'
import { MessageCircle, X } from 'lucide-react'

export default function ChatWidget() {
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
  // const chatRooms: ChatRoomListItem[] = [] // test
  const { messages } = useChatMessages(selectedGroupId)
  const { participants } = useChatParticipants(selectedGroupId)

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

  // 메세지 전송 핸들러 (추후 웹 소켓 연동 예정)
  const handleSendMessage = (message: string) => {
    return console.log(message) // eslint-disable-line no-console
  }

  // 미읽음 메세지 (기획 업데이트 시 반영 예정)
  const unreadCount = 0

  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-2 flex h-[384px] w-[320px] flex-col overflow-hidden rounded-lg bg-white shadow-[0px_25px_50px_-12px_#00000040]">
          {/* 채팅 리스트 View */}
          {currentView === 'list' && (
            <ChatListPanel
              rooms={chatRooms}
              onClose={handleClosePanel}
              onSelectRoom={handleSelectRoom}
            />
          )}

          {/* 채팅방 View */}
          {canRenderRoom && (
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
        className="bg-primary-500 relative flex h-16 w-16 items-center justify-center rounded-full shadow-[0px_10px_15px_-3px_#0000001A,0px_4px_6px_-4px_#0000001A]"
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
