import { Button, Card } from '@/components/common'
import { useStudyNotes } from '@/hooks/study-note'
import { format } from 'date-fns'
import { Pencil, UserRound } from 'lucide-react'
import { useNavigate } from 'react-router'

interface StudyNoteListProps {
  groupId: number
}

export function StudyNoteList({ groupId }: StudyNoteListProps) {
  const navigate = useNavigate()
  const { data } = useStudyNotes(groupId)

  const handleCreate = () => {
    navigate(`/study-groups/${groupId}/notes/create`)
  }

  const handleNoteDetail = (noteId: number) => {
    navigate(`/study-groups/${groupId}/notes/${noteId}`)
  }

  const notes = data?.results ?? []

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

      {notes.length > 0 ? (
        <ul>
          {notes.map((note) => (
            <li key={note.id}>
              <button
                type="button"
                onClick={() => handleNoteDetail(note.id)}
                className="w-full"
              >
                <Card className="p-4">
                  <div className="flex justify-between pb-3">
                    <p className="text-custom-gray-900 text-lg">{note.title}</p>
                    <span className="text-custom-gray-500 text-sm">
                      {format(new Date(note.created_at), 'yyyy. MM. dd.')}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 py-[2px]">
                    <span className="bg-primary-100 centralize h-8 w-8 rounded-full">
                      <UserRound className="text-primary-600 h-5 w-5" />
                    </span>
                    <span className="text-custom-gray-700 text-sm font-medium">
                      {note.author.nickname}
                    </span>
                  </div>
                </Card>
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="centralize min-h-[194px] flex-col gap-2">
          <p className="text-custom-gray-900 text-lg font-medium">
            아직 작성된 스터디 기록이 없습니다.
          </p>
          <p className="text-custom-gray-600">첫 스터디 기록을 작성해보세요!</p>
        </div>
      )}
    </section>
  )
}
