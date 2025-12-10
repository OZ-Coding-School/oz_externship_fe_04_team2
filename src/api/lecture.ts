import { API_PATHS } from '@/constants'
import { mapLectureToSelection } from '@/lib/lecture'

export async function getLectures() {
  const res = await fetch(API_PATHS.STUDYGROUP.LECTURES)

  if (!res.ok) {
    throw new Error('강의 목록을 불러오는데에 실패했습니다')
  }

  const json = await res.json()

  return json.results.map(mapLectureToSelection)
}
