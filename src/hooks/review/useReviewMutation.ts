import { createReview, updateReview } from '@/api'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export function useReviewMutation(studyId: number) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({
      reviewId,
      star_rating,
      content,
    }: {
      reviewId?: number
      star_rating: number
      content: string
    }) => {
      if (reviewId) {
        return updateReview(studyId, reviewId, { star_rating, content })
      }
      return createReview(studyId, { star_rating, content })
    },

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['studyReviews', studyId],
      })
    },
  })
}
