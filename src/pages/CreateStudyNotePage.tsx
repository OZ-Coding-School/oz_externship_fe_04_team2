import { Button, Input } from '@/components/common'
import { MarkdownEditor } from '@/components/markdown'
import { FileUploader } from '@/components/studygroup-detail'
import { StudyNoteBreadcrumb } from '@/components/studygroup-note'
import { useCreateStudyNote } from '@/hooks/study-note'
import type { CreateStudyNoteRequestType } from '@/types'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { toast } from 'react-toastify'

export function CreateStudyNotePage() {
  const { groupId } = useParams<{ groupId: string }>()
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const isInvalidParams = !groupId

  useEffect(() => {
    if (isInvalidParams) {
      toast.error('잘못된 접근입니다.')
      navigate(-1)
    }
  }, [isInvalidParams, navigate])

  const { mutate: createNote } = useCreateStudyNote(groupId ?? '')

  if (isInvalidParams) return null

  const handleSubmit = () => {
    // files는 FileUploader와 연동되지 않음
    // API 형태에 맞추기 위해 빈 값으로 payload 생성
    const payload: CreateStudyNoteRequestType = {
      title,
      content,
      files: [],
      images: [],
    }

    createNote(payload, {
      onSuccess: () => {
        navigate(`/study-groups/${groupId}`)
      },
    })
  }

  const handleCancel = () => {
    navigate(-1)
  }

  return (
    <div className="flex flex-col p-8">
      <StudyNoteBreadcrumb mode="create" />
      <header className="pt-4 pb-6">
        <h1 className="text-custom-gray-900 text-3xl font-bold">
          스터디 기록 작성
        </h1>
        <p className="text-custom-gray-600 pt-2">
          학습한 내용을 자세히 기록해보세요.
        </p>
      </header>

      <div className="border-custom-gray-200 flex flex-col gap-6 rounded-xl border p-6">
        <Input
          label="제목"
          placeholder="스터디 기록의 제목을 입력하세요."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <div>
          <label className="text-custom-gray-700 text-sm font-medium">
            내용 <span className="text-red-500">*</span>
          </label>
          <MarkdownEditor value={content} onChange={setContent} />
        </div>

        <div>
          <label className="text-custom-gray-700 text-sm font-medium">
            첨부 파일
          </label>
          <FileUploader />
        </div>
      </div>

      <div className="flex w-full justify-between gap-4 pt-6">
        <Button variant="outline" onClick={handleCancel}>
          취소
        </Button>
        <Button variant="primary" className="px-8" onClick={handleSubmit}>
          기록 저장
        </Button>
      </div>
    </div>
  )
}
