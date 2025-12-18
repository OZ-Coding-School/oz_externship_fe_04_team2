import { create } from 'zustand'
import type { StudyGroupResponseType, StudyGroupReviewType } from '@/types'

interface StudyGroupState {
  selectedStudy: StudyGroupResponseType | null
  selectedReview: StudyGroupReviewType | null
  modal: 'none' | 'list' | 'edit'

  openReviewList: (study: StudyGroupResponseType) => void
  openReviewCreate: (study: StudyGroupResponseType) => void
  openReviewEdit: (
    study: StudyGroupResponseType,
    review: StudyGroupReviewType
  ) => void
  closeModal: () => void
}

export const useStudyGroupStore = create<StudyGroupState>((set) => ({
  selectedStudy: null,
  selectedReview: null,
  modal: 'none',

  openReviewList: (study) => {
    set({ selectedStudy: study, selectedReview: null, modal: 'list' })
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
