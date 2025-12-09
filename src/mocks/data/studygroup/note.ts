import type {
  StudyNoteAuthorType,
  StudyNoteDetailType,
  StudyNoteListItemType,
} from '@/types'

// mock 전용 타입(상세 타입 + group_id)
export interface StudyNoteMockType extends StudyNoteDetailType {
  group_id: number
}

// mock 작성자 데이터
export const mockNoteAuthors: StudyNoteAuthorType[] = [
  {
    id: 1,
    nickname: '김스터디',
    profile_img_url: 'https://randomuser.me/api/portraits/lego/1.jpg',
  },
  {
    id: 2,
    nickname: '최자바',
    profile_img_url: 'https://randomuser.me/api/portraits/lego/2.jpg',
  },
  {
    id: 3,
    nickname: '이프론트',
    profile_img_url: 'https://randomuser.me/api/portraits/lego/3.jpg',
  },
]

// mock 노트 상세 데이터
export const mockNotes: StudyNoteMockType[] = [
  {
    id: 1,
    group_id: 1,
    title: '파이썬 1일차 학습 정리',
    author: mockNoteAuthors[0],
    content:
      '## 파이썬 기초\n\n오늘은 파이썬 자료형에 대해 배웠습니다.\n\n- 정수형 (int)\n- 실수형 (float)\n- 문자열 (str)',
    ai_summary:
      '파이썬의 기본 자료형인 정수형, 실수형, 문자열에 대해 학습했습니다.',
    files: [
      {
        id: 1,
        file_name: 'python_basics.pdf',
        file_url: '#',
      },
    ],
    created_at: '2025-11-20T10:00:00+09:00',
    updated_at: '2025-11-20T10:00:00+09:00',
  },
  {
    id: 2,
    group_id: 1,
    title: '파이썬 2일차 - for문 정리',
    author: mockNoteAuthors[1],
    content:
      '## for문 기초\n\n반복문의 기본 사용법을 정리했습니다.\n\n```python\nfor i in range(10):\n  print(i)\n```',
    ai_summary: 'for문의 기본 사용법과 range 함수 활용법을 정리했습니다.',
    files: [],
    created_at: '2025-11-21T14:30:00+09:00',
    updated_at: '2025-11-21T14:30:00+09:00',
  },
  {
    id: 3,
    group_id: 1,
    title: '파이썬 3일차 - 함수 정의',
    author: mockNoteAuthors[2],
    content: '## 함수 정의하기\n\ndef 키워드로 함수를 정의합니다.',
    ai_summary: 'def 키워드를 사용한 함수 정의 방법을 학습했습니다.',
    files: [],
    created_at: '2025-11-22T09:00:00+09:00',
    updated_at: '2025-11-22T09:00:00+09:00',
  },
]

// 상세 → 목록 아이템 변환 함수
export const toNoteListItem = (
  note: StudyNoteMockType
): StudyNoteListItemType => ({
  id: note.id,
  author: note.author,
  title: note.title,
  created_at: note.created_at,
})
