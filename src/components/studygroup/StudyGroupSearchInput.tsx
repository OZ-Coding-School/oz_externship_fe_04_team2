import { SearchIcon } from 'lucide-react'

interface StudyGroupSearchInputProps {
  value: string
  onChange: (value: string) => void
}

export function StudyGroupSearchInput({
  value,
  onChange,
}: StudyGroupSearchInputProps) {
  return (
    <div className="relative flex max-w-md">
      <SearchIcon
        className="text-custom-gray-400 absolute top-3 left-3"
        size={16}
      />
      <input
        type="text"
        className="remove-focus-outline border-custom-gray-300 flex h-10 flex-1 rounded-lg border pl-9"
        placeholder="스터디 그룹 검색..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
