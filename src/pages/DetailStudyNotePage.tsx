import { Button } from '@/components/common'
import {
  BackToStudyGroupButton,
  StudyNoteAttachmentItem,
  StudyNoteBreadcrumb,
} from '@/components/studygroup-note'
import { StudyNoteToggle } from '@/components/studygroup-note/StudyNoteToggle'
import { useDeleteStudyNote, useStudyNoteDetail } from '@/hooks/study-note'
import { format } from 'date-fns'
import { Bot, Paperclip, UserRound } from 'lucide-react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router'

export function DetailStudyNotePage() {
  const [isSummaryOpen, setIsSummaryOpen] = useState(true)
  const { groupId, noteId } = useParams<{ groupId: string; noteId: string }>()
  const navigate = useNavigate()

  const enabled = !!groupId && !!noteId
  const { data } = useStudyNoteDetail(groupId ?? '', noteId ?? '', enabled)
  const { mutate: deleteNote } = useDeleteStudyNote(groupId ?? '')

  const toggleSummary = () => setIsSummaryOpen((prev) => !prev)

  const handleEdit = () => {
    navigate(`/study-groups/${groupId}/notes/${noteId}/edit`)
  }

  const handleDelete = () => {
    deleteNote(Number(noteId), {
      onSuccess: () => {
        navigate(`/study-groups/${groupId}`)
      },
    })
  }

  if (!data) return null

  return (
    <div className="flex flex-col gap-6 p-8">
      <StudyNoteBreadcrumb mode="detail" />
      <div className="border-custom-gray-200 rounded-xl border">
        <header className="border-b-custom-gray-200 flex flex-col gap-4 border-b p-6">
          <div className="flex justify-between">
            <h1 className="text-custom-gray-900 text-2xl font-bold">
              {data.title}
            </h1>
            <div className="flex gap-2">
              <Button variant="secondary" className="h-8" onClick={handleEdit}>
                수정하기
              </Button>
              <Button
                variant="danger"
                className="text-danger-800 h-8 bg-[#FEE2E2]"
                onClick={handleDelete}
              >
                삭제하기
              </Button>
            </div>
          </div>
          <p className="text-custom-gray-600 flex items-center gap-2 text-sm">
            <span className="bg-primary-100 centralize h-8 w-8 rounded-full">
              <UserRound className="text-primary-600 h-5 w-5" />
            </span>
            <span>{data.author.nickname}</span>
            <span>&bull;</span>
            <span>
              작성일:{' '}
              {format(new Date(data.created_at), 'yyyy. MM. dd. a h:mm')}
            </span>
          </p>
        </header>

        {/* AI 요약 */}
        <section className="border-b-custom-gray-200 border-b p-6">
          <div className="flex items-center justify-between pb-4">
            <h2 className="flex items-center gap-2">
              <Bot className="text-primary-600 h-5 w-5" />
              <span className="text-custom-gray-900 text-lg font-semibold">
                AI 학습 내용 요약
              </span>
            </h2>
            <StudyNoteToggle isOpen={isSummaryOpen} onToggle={toggleSummary} />
          </div>
          {isSummaryOpen && (
            <div className="text-custom-gray-900 bg-amber-50 p-4">
              <p>{data.ai_summary}</p>
            </div>
          )}
        </section>

        {/* 본문 */}
        <section className="border-b-custom-gray-200 border-b p-6">
          <p>{data.content}</p>
        </section>

        {/* 첨부 파일 */}
        <section className="p-6">
          <h3 className="text-custom-gray-900 flex items-center gap-2 pb-4">
            <Paperclip className="h-5 w-5" />
            <span className="text-lg font-normal">
              첨부 파일 ({data.files.length}개)
            </span>
          </h3>
          <ul className="grid grid-cols-2 gap-2">
            {data.files.map((file) => (
              <StudyNoteAttachmentItem key={file.id} file={file} />
            ))}
          </ul>
        </section>
      </div>

      <BackToStudyGroupButton />
    </div>
  )
}
