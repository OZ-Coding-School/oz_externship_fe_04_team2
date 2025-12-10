import { Book, Plus, X } from 'lucide-react'
import { Button } from '@/components/common'
import { useMemo, useState } from 'react'
import { useLectures } from '@/hooks/useLectures'
import type { StudyGroupLectureSelectionType } from '@/types'
import { LectureSelectionModal, SelectableLectureCard } from './lecture'

export function StudyGroupLectures() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedIds, setSelectedIds] = useState<number[]>([])

  const { data: allLectures } = useLectures()

  const selectedLectures = useMemo(() => {
    if (!allLectures || selectedIds.length === 0) return []
    return allLectures.filter((lecture: StudyGroupLectureSelectionType) =>
      selectedIds.includes(lecture.id)
    )
  }, [allLectures, selectedIds])

  const handleSelectLecture = (ids: number[]) => {
    setSelectedIds(ids)
    setIsModalOpen(false)
  }

  const handleRemoveLecture = (idToRemove: number) => {
    setSelectedIds((prev) => prev.filter((id) => id !== idToRemove))
  }

  return (
    <>
      <section className="border-custom-gray-200 flex w-full flex-col gap-6 rounded-xl border bg-white p-8">
        <div className="flex w-full flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-bold">강의 선택</h1>
            <p className="text-custom-gray-700 text-sm font-medium">
              스터디에서 함께 공부할 강의를 선택하세요 (최대 5개)
            </p>
          </div>
          <Button
            variant="primary"
            className="mt-4 w-fit md:mt-0"
            onClick={() => setIsModalOpen(true)}
          >
            <Plus />
            강의 추가하기
          </Button>
        </div>
        {selectedLectures.length > 0 ? (
          <div className="flex flex-col gap-4">
            {selectedLectures.map((lecture: StudyGroupLectureSelectionType) => (
              <div key={lecture.id} className="relative">
                <div className="pointer-events-none">
                  <SelectableLectureCard
                    results={lecture}
                    isSelected
                    isDisabled
                    onToggle={() => {}}
                  />
                </div>
                <button
                  onClick={() => handleRemoveLecture(lecture.id)}
                  className="border-custom-gray-200 text-custom-gray-400 hover:border-danger-500 hover:text-danger-500 absolute -top-2 -right-2 z-10 rounded-full border bg-white p-1 shadow-md transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="centralize px-auto text-custom-gray-500 flex-col py-12 font-normal">
            <Book size={36} className="text-custom-gray-300 mb-4" />
            <h3 className="text-custom-gray-900 text-base font-semibold">
              아직 선택된 강의가 없습니다
            </h3>
            <p className="mt-1 text-sm">
              강의 추가하기 버튼을 클릭해서 강의를 선택해보세요
            </p>
          </div>
        )}
      </section>
      <LectureSelectionModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleSelectLecture}
        initialSelectedIds={selectedIds}
      />
    </>
  )
}
