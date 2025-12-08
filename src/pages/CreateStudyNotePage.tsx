import { Button, Input } from '@/components/common'
import { MarkdownEditor } from '@/components/markdown'
import { ImageUploader } from '@/components/studygroup'
import { StudyNoteBreadcrumb } from '@/components/studygroup-note'

export function CreateStudyNotePage() {
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
          required
        />
        <div>
          <label className="text-custom-gray-700 text-sm font-medium">
            내용 <span className="text-red-500">*</span>
          </label>
          <MarkdownEditor />
        </div>

        <div>
          <label className="text-custom-gray-700 text-sm font-medium">
            첨부 파일
          </label>
          <ImageUploader />
        </div>
      </div>

      <div className="flex w-full justify-between gap-4 pt-6">
        <Button variant="outline">취소</Button>
        <Button variant="primary" className="px-8">
          기록 저장
        </Button>
      </div>
    </div>
  )
}
