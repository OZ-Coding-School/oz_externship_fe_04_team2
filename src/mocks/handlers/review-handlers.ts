import { http, HttpResponse } from 'msw'
import { mockReviewDatabase } from '@/mocks/data'
import { API_PATHS } from '@/constants'

export const reviewHandlers = [
  http.get(API_PATHS.REVIEW.MSW_LIST, ({ params }) => {
    const groupId = Number(params.groupId)

    const reviews = mockReviewDatabase[groupId] || []

    const totalRating = reviews.reduce((sum, r) => sum + r.star_rating, 0)

    const averageRating =
      reviews.length > 0 ? Number((totalRating / reviews.length).toFixed(2)) : 0

    return HttpResponse.json({
      reviews,
      average_rating: averageRating,
      total_count: reviews.length,
    })
  }),

  http.post(API_PATHS.REVIEW.MSW_LIST, async ({ request, params }) => {
    const groupId = Number(params.groupId)
    const body = (await request.json()) as {
      star_rating: number
      content: string
    }

    const newReview = {
      id: Date.now(),
      star_rating: body.star_rating,
      content: body.content,
      created_at: new Date().toISOString(),
      is_mine: true,
    }

    if (!mockReviewDatabase[groupId]) {
      mockReviewDatabase[groupId] = []
    }

    mockReviewDatabase[groupId].push(newReview)

    return HttpResponse.json({ success: true, review: newReview })
  }),

  http.patch(API_PATHS.REVIEW.MSW_DETAIL, async ({ request, params }) => {
    const groupId = Number(params.groupId)
    const reviewId = Number(params.reviewId)
    const body = (await request.json()) as {
      star_rating: number
      content: string
    }

    const reviews = mockReviewDatabase[groupId] || []

    const reviewIndex = reviews.findIndex((r) => r.id === reviewId)

    if (reviewIndex === -1) {
      return HttpResponse.json({ error: 'Review not found' }, { status: 404 })
    }

    const updatedReview = {
      ...reviews[reviewIndex],
      star_rating: body.star_rating,
      content: body.content,
      updated_at: new Date().toISOString(),
    }

    reviews[reviewIndex] = updatedReview

    return HttpResponse.json({ success: true, review: updatedReview })
  }),
]
