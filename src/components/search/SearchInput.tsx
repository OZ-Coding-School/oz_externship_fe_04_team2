import { useDebounce } from '@/hooks'
import { useSearchStore } from '@/store'
import { SearchIcon } from 'lucide-react'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router'

export function SearchInput() {
  const { searchTerm, setSearchTerm } = useSearchStore()
  const navigate = useNavigate()
  const location = useLocation()

  const debouncedSearchTerm = useDebounce(searchTerm, 500)

  useEffect(() => {
    if (debouncedSearchTerm && location.search !== `?${debouncedSearchTerm}`) {
      navigate(`/search?q=${debouncedSearchTerm}`)
    }
  }, [debouncedSearchTerm, navigate, location.search])

  return (
    <div className="relative mx-6 flex max-w-md">
      <SearchIcon
        className="text-custom-gray-400 absolute top-3 left-3"
        size={16}
      />
      <input
        type="text"
        className="remove-focus-outline border-custom-gray-300 flex h-10 flex-1 rounded-lg border pl-9"
        placeholder="스터디 그룹 검색..."
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
      />
    </div>
  )
}
