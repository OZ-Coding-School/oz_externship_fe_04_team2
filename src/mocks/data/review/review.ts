import type { StudyGroupReviewType } from '@/types'

export const mockReviewDatabase: Record<number, StudyGroupReviewType[]> = {
  4: [
    {
      id: 99,
      star_rating: 4,
      content: '좋았습니다. 제네릭 부분 심화 학습이 도움됐어요.',
      created_at: '2025. 7. 20',
      is_mine: true,
    },
    {
      id: 41,
      star_rating: 5,
      content: '타입 체조가 뭔지 이제 좀 알 것 같네요. 유익했습니다.',
      created_at: '2025. 7. 18',
      is_mine: false,
    },
    {
      id: 42,
      star_rating: 3,
      content: '난이도가 생각보다 높아서 따라가기 조금 벅찼습니다 ㅠㅠ',
      created_at: '2025. 7. 16',
      is_mine: false,
    },
  ],
}
