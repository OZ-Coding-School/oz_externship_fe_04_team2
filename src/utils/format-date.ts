// 채팅방 목록 UI 날짜 - 0월 00일
export function formatChatListDate(isoString: string) {
  const date = new Date(isoString)
  return `${date.getMonth() + 1}월 ${date.getDate()}일`
}
