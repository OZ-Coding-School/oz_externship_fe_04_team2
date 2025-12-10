import { eachMinuteOfInterval, format } from 'date-fns'

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

// 새 스케줄 추가 시작/종료 시간
export function createTimeOptions(step = 10) {
  const times = eachMinuteOfInterval(
    {
      start: new Date(2000, 0, 1, 0, 0),
      end: new Date(2000, 0, 1, 23, 59),
    },
    { step }
  )

  return times.map((date) => ({
    // 내부 로직 및 서버 요청에 사용되는 24시간제 시간 문자열 - 00:00
    value: format(date, 'HH:mm'),
    // UI 오전/오후 기반 12시간제 시간 문자열 - 오전/오후 0:00
    label: format(date, 'a h:mm'),
  }))
}

export function formatMinutesToHHMM(minutes: number): string {
  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60
  const paddedHours = String(hours).padStart(2, '0')
  const paddedMinutes = String(mins).padStart(2, '0')

  return `${paddedHours}:${paddedMinutes}`
}
