import { http, HttpResponse } from 'msw'
import { mockReviewDatabase } from '@/mocks/data'

export const reviewHandlers = [
  http.get('/api/v1/study-groups/:groupId/reviews', ({ params }) => {
    const groupId = Number(params.groupId)

    const reviews = mockReviewDatabase[groupId] || []

    const totalRating = reviews.reduce((sum, r) => sum + r.star_rating, 0)
    const averageRating =
      reviews.length > 0 ? Number((totalRating / reviews.length).toFixed(1)) : 0

    return HttpResponse.json({
      reviews: reviews,
      average_rating: averageRating,
      total_count: reviews.length,
    })
  }),
]
