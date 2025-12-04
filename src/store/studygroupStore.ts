import { create } from 'zustand'
import type { StudyGroupResponseType, StudyGroupReviewType } from '@/types'
import { API_PATHS } from '@/constants'

interface StudyGroupState {
  studies: StudyGroupResponseType[]
  selectedStudy: StudyGroupResponseType | null
  modal: 'none' | 'list' | 'edit'
  reviews: StudyGroupReviewType[]
  selectedReview: StudyGroupReviewType | null
  reviewStats: { average: number; total: number }
  fetchStudies: () => Promise<void>
  openReviewList: (study: StudyGroupResponseType) => Promise<void>
  openReviewCreate: (study: StudyGroupResponseType) => void
  openReviewEdit: (
    study: StudyGroupResponseType,
    review: StudyGroupReviewType
  ) => void
  closeModal: () => void
}

export const useStudyGroupStore = create<StudyGroupState>((set) => ({
  studies: [],
  selectedStudy: null,
  modal: 'none',
  reviews: [],
  selectedReview: null,
  reviewStats: { average: 0, total: 0 },

  fetchStudies: async () => {
    try {
      const res = await fetch(API_PATHS.STUDYGROUP.LIST)
      const data: StudyGroupResponseType[] = await res.json()
      set({ studies: data })
    } catch (err) {
      console.error('스터디 그룹 불러오기 실패', err)
    }
  },

  openReviewList: async (study) => {
    set({ selectedStudy: study, modal: 'list' })
    try {
      const res = await fetch(API_PATHS.REVIEW.LIST(study.id))
      const data = await res.json()
      set({
        reviews: data.reviews,
        reviewStats: { average: data.average_rating, total: data.total_count },
      })
    } catch (err) {
      console.error('리뷰 불러오기 실패', err)
    }
  },

  openReviewCreate(study) {
    set({ selectedStudy: study, selectedReview: null, modal: 'edit' })
  },

  openReviewEdit: (study, review) => {
    set({ selectedStudy: study, selectedReview: review, modal: 'edit' })
  },

  closeModal: () =>
    set({ modal: 'none', selectedStudy: null, selectedReview: null }),
}))
