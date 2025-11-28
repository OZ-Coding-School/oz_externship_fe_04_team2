import { create } from 'zustand'

interface SearchStoreState {
  searchTerm: string
  setSearchTerm: (term: string) => void
  resetSearch: () => void
}

export const useSearchStore = create<SearchStoreState>((set) => ({
  searchTerm: '',

  setSearchTerm: (term: string) => set({ searchTerm: term }),

  resetSearch: () =>
    set({
      searchTerm: '',
    }),
}))
