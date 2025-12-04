import { Book, Plus } from 'lucide-react'
import { Button } from '@/components/common'

export function StudyGroupLectures() {
  return (
    <section className="border-custom-gray-200 flex w-full flex-col gap-6 rounded-xl border bg-white p-8">
      <div className="flex w-full flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold">강의 선택</h1>
          <p className="text-custom-gray-700 text-sm font-medium">
            스터디에서 함께 공부할 강의를 선택하세요 (최대 5개)
          </p>
        </div>
        <Button variant="primary" className="mt-4 w-fit md:mt-0">
          <Plus />
          강의 추가하기
        </Button>
      </div>
      <div className="centralize px-auto text-custom-gray-500 flex-col py-12 font-normal">
        <Book size={36} />
        <h3 className="text-base">아직 선택된 강의가 없습니다</h3>
        <p className="text-sm">
          강의 추가하기 버튼을 클릭해서 강의를 선택해보세요
        </p>
      </div>
    </section>
  )
}
