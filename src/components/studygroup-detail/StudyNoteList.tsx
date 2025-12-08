import { Button, Card } from '@/components/common'
import { Pencil, UserRound } from 'lucide-react'
import { useNavigate } from 'react-router'

interface StudyNoteListProps {
  groupId: number
}

export function StudyNoteList({ groupId }: StudyNoteListProps) {
  const navigate = useNavigate()

  const handleCreate = () => {
    navigate(`/study-groups/${groupId}/notes/create`)
  }

  const handleNoteDetail = (noteId: number) => {
    navigate(`/study-groups/${groupId}/notes/${noteId}`)
  }

  return (
    <section className="border-custom-gray-200 flex flex-col gap-4 rounded-xl border p-6">
      <div className="flex items-center justify-between pb-6">
        <p className="text-lg font-semibold">스터디 기록</p>
        <Button
          variant="primary"
          className="gap-2 text-base"
          onClick={handleCreate}
        >
          <Pencil className="h-4 w-4" />
          <span>작성하기</span>
        </Button>
      </div>
      <ul>
        <li>
          <button
            type="button"
            // API 연동 시 note.id로 변경
            onClick={() => handleNoteDetail(1)}
            className="w-full"
          >
            <Card className="p-4">
              <div className="flex justify-between pb-3">
                <p className="text-custom-gray-900 text-lg">
                  React Hooks 실습 정리
                </p>
                <span className="text-custom-gray-500 text-sm">
                  2024. 02. 16. 오전 05:30
                </span>
              </div>
              <div className="flex items-center gap-3 py-[2px]">
                <span className="bg-primary-100 centralize h-8 w-8 rounded-full">
                  <UserRound className="text-primary-600 h-5 w-5" />
                </span>
                <span className="text-custom-gray-700 text-sm font-medium">
                  김개발
                </span>
              </div>
            </Card>
          </button>
        </li>
      </ul>
    </section>
  )
}
