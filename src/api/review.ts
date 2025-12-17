import { API_PATHS } from '@/constants'
import { apiFetch } from '@/utils'

export function createReview(
  studyId: number,
  data: {
    star_rating: number
    content: string
  }
) {
  return apiFetch(API_PATHS.REVIEW.LIST(studyId), {
    method: 'POST',
    body: JSON.stringify(data),
  })
}

export function updateReview(
  studyId: number,
  reviewId: number,
  data: {
    star_rating: number
    content: string
  }
) {
  return apiFetch(API_PATHS.REVIEW.DETAIL(studyId, reviewId), {
    method: 'PATCH',
    body: JSON.stringify(data),
  })
}
