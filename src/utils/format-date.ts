// 채팅방 목록 UI 날짜 - 0월 00일
export function formatChatListDate(isoString: string) {
  const date = new Date(isoString)
  return `${date.getMonth() + 1}월 ${date.getDate()}일`
}

// 채팅 메시지 시간 - HH:mm
export function formatChatTime(isoString: string) {
  const date = new Date(isoString)
  return date.toLocaleTimeString('ko-KR', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  })
}
