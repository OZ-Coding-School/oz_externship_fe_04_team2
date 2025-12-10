import { SearchIcon } from 'lucide-react'

interface LectureSearchInputProps {
  value: string
  onChange: (val: string) => void
}

export function LectureSearchInput({
  value,
  onChange,
}: LectureSearchInputProps) {
  return (
    <div className="relative w-full">
      <SearchIcon
        className="text-custom-gray-400 absolute top-3 left-3"
        size={16}
      />
      <input
        type="text"
        className="remove-focus-outline border-custom-gray-300 flex h-10 flex-1 rounded-lg border pl-9"
        placeholder="강의명이나 강사명으로 검색..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
