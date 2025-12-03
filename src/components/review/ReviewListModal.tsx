import { Button, Modal } from '@/components/common'
import { StarRating } from '@/components/review'
import type { StudyGroupReviewType } from '@/types'

interface ReviewListModalProps {
  isOpen: boolean
  onClose: () => void
  studyName: string
  reviews: StudyGroupReviewType[]
  averageRating: number
  totalCount: number
}

export function ReviewListModal({
  isOpen,
  onClose,
  studyName,
  reviews,
  averageRating,
  totalCount,
}: ReviewListModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="스터디 리뷰"
      wrapperClassName="max-w-[600px] h-[80vh] bg-white rounded-xl"
      innerClassName="items-stretch justify-start p-0 gap-0 overflow-hidden"
      titleClassName="flex items-center justify-between px-6 pt-6 pb-2"
    >
      <div className="border-custom-gray-100 px-6 pb-6">
        <p className="text-custom-gray-500 text-xs">{studyName}</p>
        <div className="mt-6 flex flex-col items-center justify-center gap-2">
          <div className="flex gap-2">
            <StarRating rating={Math.round(averageRating)} readonly size={24} />
            <span className="text-custom-gray-900 text-2xl font-bold">
              {averageRating}
            </span>
          </div>
          <div className="text-custom-gray-400 text-sm">
            총 {totalCount}개의 리뷰
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-6">
        <div className="flex flex-col gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="border-custom-gray-100 border-b pb-6 last:border-0 last:pb-0"
            >
              <div className="mb-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <StarRating rating={review.star_rating} readonly size={14} />
                  <span className="text-custom-gray-900 text-sm font-bold">
                    {review.star_rating}/5
                  </span>
                  {review.is_mine && (
                    <span className="bg-primary-100 text-primary-700 rounded px-1.5 py-0.5 text-[10px] font-bold">
                      내 리뷰
                    </span>
                  )}
                </div>
                <span className="text-custom-gray-400 text-xs">
                  {review.created_at}
                </span>
              </div>
              <p className="text-custom-gray-700 text-sm leading-relaxed">
                {review.content}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="border-custom-gray-100 border-t p-4">
        <Button variant="primary" className="w-full font-bold">
          내 리뷰 수정하기
        </Button>
      </div>
    </Modal>
  )
}
