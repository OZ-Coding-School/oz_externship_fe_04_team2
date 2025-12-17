import { useCallback, useEffect, useRef } from 'react'

interface AutoScrollToBottomOptions {
  onlyIfAtBottom?: boolean
  threshold?: number
  behavior?: ScrollBehavior
}

// 메시지 개수 변경 시 메시지 영역을 하단으로 자동 스크롤하는 훅
export function useAutoScrollToBottom(
  messageCount: number,
  options: AutoScrollToBottomOptions = {}
) {
  const { onlyIfAtBottom = false, threshold = 20, behavior = 'auto' } = options

  const containerRef = useRef<HTMLDivElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  // 현재 스크롤 위치가 하단 근처인지 판단
  const isAtBottom = useCallback(() => {
    const element = containerRef.current
    if (!element) return true
    return (
      element.scrollHeight - element.scrollTop - element.clientHeight <
      threshold
    )
  }, [threshold])

  // 필요 시 강제로 하단으로 스크롤
  const scrollToBottom = useCallback(
    (behaviorOverride: ScrollBehavior = behavior) => {
      bottomRef.current?.scrollIntoView({ behavior: behaviorOverride })
    },
    [behavior]
  )

  // 메시지 변경 시 하단 자동 스크롤
  useEffect(() => {
    if (onlyIfAtBottom && !isAtBottom()) return
    scrollToBottom()
  }, [messageCount, onlyIfAtBottom, isAtBottom, scrollToBottom])

  return { containerRef, bottomRef, isAtBottom, scrollToBottom }
}
