import { ChatMessageItem } from '@/components/chat'
import { Button } from '@/components/common'
import { useAutoScrollToBottom } from '@/hooks'
import type { ChatMessage } from '@/types'
import { useEffect, useRef, useState } from 'react'

interface ChatMessageListProps {
  messages: ChatMessage[]
  currentUserId: number
}

export function ChatMessageList({
  messages,
  currentUserId,
}: ChatMessageListProps) {
  const { containerRef, isAtBottom, scrollToBottom, bottomRef } =
    useAutoScrollToBottom(messages.length, {
      onlyIfAtBottom: true,
      behavior: 'auto',
    })

  const [hasNewMessage, setHasNewMessage] = useState(false)
  const prevCountRef = useRef(messages.length)

  // 새 메시지 감지
  useEffect(() => {
    const prevCount = prevCountRef.current
    const currentCount = messages.length

    if (currentCount > prevCount && !isAtBottom()) {
      setHasNewMessage(true)
    }
    prevCountRef.current = currentCount
  }, [messages.length, isAtBottom])

  const handleScroll = () => {
    if (!hasNewMessage) return
    if (isAtBottom()) {
      setHasNewMessage(false)
    }
  }

  const handleClickNewMessage = () => {
    scrollToBottom('smooth')
    setHasNewMessage(false)
  }

  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      className="relative flex min-h-0 flex-1 flex-col gap-3 overflow-y-auto p-4"
    >
      {messages.map((msg) => (
        <ChatMessageItem
          key={msg.id}
          message={msg}
          currentUserId={currentUserId}
        />
      ))}
      <div ref={bottomRef} className="h-0"></div>

      {hasNewMessage && (
        <Button
          variant="primary"
          onClick={handleClickNewMessage}
          className="bg-primary-500/70 hover:bg-primary-500 absolute bottom-2 left-1/2 -translate-x-1/2 rounded-full shadow-sm"
        >
          새로운 메시지 보기
        </Button>
      )}
    </div>
  )
}
