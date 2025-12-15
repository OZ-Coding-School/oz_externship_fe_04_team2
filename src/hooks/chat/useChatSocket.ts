import type {
  ChatMessage,
  ChatParticipant,
  ServerToClientWebSocketMsg,
} from '@/types'
import { useEffect, useRef, useState } from 'react'

interface UseChatSocketOptions {
  groupId: number
  accessToken?: string | null
}

export enum SocketStatus {
  CONNECTING = 'connecting',
  OPEN = 'open',
  CLOSED = 'closed',
  ERROR = 'error',
}

export function useChatSocket({ groupId, accessToken }: UseChatSocketOptions) {
  const socketRef = useRef<WebSocket | null>(null)
  const [status, setStatus] = useState<SocketStatus>(SocketStatus.CLOSED)
  const [participants, setParticipants] = useState<ChatParticipant[]>([])
  const [messages, setMessages] = useState<ChatMessage[]>([])

  useEffect(() => {
    if (!accessToken || !groupId) return

    setStatus(SocketStatus.CONNECTING)

    const url = `wss://api.ozcoding.site/ws/chat/${groupId}/?token=${accessToken}`
    const socket = new WebSocket(url)
    socketRef.current = socket

    // 연결 성공
    socket.onopen = () => {
      setStatus(SocketStatus.OPEN)
    }

    // 서버에서 메시지 수신
    socket.onmessage = (event) => {
      const data = JSON.parse(event.data) as ServerToClientWebSocketMsg

      switch (data.type) {
        case 'presence':
          setParticipants(data.members)
          break
        case 'user_join':
          setParticipants((prev) => [...prev, data.user])
          break
        case 'user_leave':
          setParticipants((prev) =>
            prev.filter((participant) => participant.id !== data.user.id)
          )
          break
        case 'history':
          setMessages(data.messages)
          break
        case 'message':
          setMessages((prev) => [...prev, data])
          break
      }
    }

    // 에러 처리
    socket.onerror = () => {
      setStatus(SocketStatus.ERROR)
    }

    // 종료 처리
    socket.onclose = () => {
      setStatus(SocketStatus.CLOSED)
    }

    // cleanup 페이지 이동, 언마운트 시 소켓 닫기
    return () => {
      socket.close()
      socketRef.current = null
    }
  }, [groupId, accessToken])

  // 클라이언트 → 서버 메시지 전송
  const sendMessage = (content: string) => {
    const socket = socketRef.current
    if (!socket || socket.readyState !== WebSocket.OPEN) return
    socket.send(JSON.stringify({ content }))
  }

  return {
    status,
    participants,
    messages,
    sendMessage,
  }
}
