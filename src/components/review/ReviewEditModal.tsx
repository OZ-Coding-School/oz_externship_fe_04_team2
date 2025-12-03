import { useState } from 'react'
import { Button, Modal } from '@/components/common'
import { StarRating } from '@/components/review'

interface ReviewEditModalProps {
  isOpen: boolean
  onClose: () => void
  studyName: string
  studyDate: string
}

export function ReviewEditModal({
  isOpen,
  onClose,
  studyName,
  studyDate,
}: ReviewEditModalProps) {
  const [rating, setRating] = useState(0)
  const [content, setContent] = useState('')

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="리뷰 작성"
      wrapperClassName="h-auto max-w-[600px] bg-white rounded-xl"
      innerClassName="justify-start items-stretch p-6 gap-4"
      titleClassName="justify-between flex items-center px-6 pt-6 mb-0"
    >
      <div className="pb-4">
        <h1 className="text-custom-gray-900 text-base font-medium">
          {studyName}
        </h1>
        <p className="text-custom-gray-500 mt-2 text-sm">{studyDate}</p>
      </div>
      <div className="py-2">
        <label className="text-custom-gray-900 mb-2 block text-sm font-medium">
          별점 <span className="text-danger-500">*</span>
        </label>
        <StarRating
          rating={rating}
          onRatingChange={setRating}
          size={28}
          className="gap-2"
        />
      </div>
      <div>
        <label className="text-custom-gray-900 mb-2 block text-sm font-medium">
          리뷰 내용 <span className="text-danger-500">*</span>
        </label>
        <textarea
          className="border-custom-gray-300 placeholder:text-custom-gray-400 text-custom-gray-900 focus:border-primary-500 focus:ring-primary-500 h-32 w-full resize-none rounded-lg border px-3 py-2 focus:ring-1 focus:outline-none"
          placeholder="스터디에 대한 솔직한 후기를 남겨주세요..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          maxLength={500}
        />
        <div className="text-custom-gray-400 mt-1 text-xs">
          {content.length}/500자
        </div>
      </div>
      <div className="mt-4 flex gap-3">
        <Button variant="outline" className="flex-1" onClick={onClose}>
          취소
        </Button>
        <Button
          variant="primary"
          className="flex-1"
          disabled={rating === 0 || content.length === 0}
        >
          작성 완료
        </Button>
      </div>
    </Modal>
  )
}
