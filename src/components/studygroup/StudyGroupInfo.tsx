import { Input, ImageUploader } from '@/components/common'
import { MarkdownEditor } from '@/components/markdown'

export function StudyGroupInfo() {
  return (
    <section className="border-custom-gray-200 flex w-full flex-col gap-6 rounded-xl border bg-white p-8">
      <h1 className="text-xl font-bold">기본 정보</h1>
      <div className="flex flex-1 flex-col gap-1">
        <label className="text-custom-gray-700 text-sm font-medium">
          스터디 그룹명 <span className="text-red-500">*</span>
        </label>
        <Input placeholder="스터디 그룹의 이름을 입력하세요" />
      </div>
      <div className="flex flex-1 flex-col gap-1">
        <label className="text-custom-gray-700 text-sm font-medium">
          스터디 그룹 소개 (선택사항)
        </label>
        <MarkdownEditor />
      </div>
      <div className="flex flex-1 flex-col gap-1">
        <label className="text-custom-gray-700 text-sm font-medium">
          스터디 그룹 소개 (선택사항)
        </label>
        <ImageUploader />
      </div>
    </section>
  )
}
