import { Modal } from '@/components/common'
import { useEffect, useState } from 'react'
import { LectureSearchInput, LectureList } from '@/components/studygroup'

interface LectureSelectionModalProps {
  isOpen: boolean
  onClose: () => void
  onConfirm: (selectedIds: number[]) => void
  initialSelectedIds?: number[]
}

export function LectureSelectionModal({
  isOpen,
  onClose,
  onConfirm,
  initialSelectedIds = [],
}: LectureSelectionModalProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedIds, setSelectedIds] = useState<number[]>(initialSelectedIds)

  useEffect(() => {
    if (isOpen) {
      setSelectedIds(initialSelectedIds)
      setSearchTerm('')
    }
  }, [isOpen, initialSelectedIds])

  const handleToggle = (id: number) => {
    setSelectedIds((prev) => {
      if (prev.includes(id)) {
        return prev.filter((itemId) => itemId !== id)
      }
      if (prev.length >= 5) return prev
      return [...prev, id]
    })
  }

  const handleConfirm = () => {
    onConfirm(selectedIds)
    onClose()
  }

  const headerContent = (
    <div className="flex flex-col gap-1">
      <span className="text-xl font-bold text-gray-900">강의 선택</span>
      <span className="text-sm font-normal text-gray-500">
        스터디에서 함께 공부할 강의를 선택하세요 ({selectedIds.length}/5)
      </span>
    </div>
  )

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={headerContent}
      className="z-50"
      wrapperClassName="max-w-4xl bg-white p-0 m-4"
      innerClassName="flex flex-col h-full p-0 m-0 gap-0"
      titleClassName="p-6 bg-white border-b border-custom-gray-200"
    >
      <LectureSearchInput value={searchTerm} onChange={setSearchTerm} />
      <div className="flex-1 overflow-y-auto p-6">
        <LectureList
          searchTerm={searchTerm}
          selectedIds={selectedIds}
          onToggle={handleToggle}
        />
      </div>
      <div className="border-custom-gray-200 border-t bg-white p-6">
        <div className="flex min-w-80 items-center justify-between">
          <span className="text-custom-gray-600 text-sm font-medium">
            {selectedIds.length}개 강의 선택됨
          </span>
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="border-custom-gray-300 text-custom-gray-700 hover:bg-custom-gray-50 rounded-lg border bg-white px-4 py-2 text-sm font-medium transition-colors"
            >
              취소
            </button>
            <button
              onClick={handleConfirm}
              disabled={selectedIds.length === 0}
              className="disabled:bg-custom-gray-300 bg-primary-400 hover:bg-primary-500 rounded-lg px-4 py-2 text-sm font-bold text-white shadow-sm transition-colors disabled:cursor-not-allowed"
            >
              선택 완료
            </button>
          </div>
        </div>
      </div>
    </Modal>
  )
}
