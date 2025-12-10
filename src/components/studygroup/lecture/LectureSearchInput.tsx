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
    <div className="border-custom-gray-200 relative w-full border-b p-6">
      <SearchIcon
        className="text-custom-gray-400 absolute top-10 left-10"
        size={16}
      />
      <input
        type="text"
        className="remove-focus-outline border-custom-gray-300 flex h-12 w-full flex-1 rounded-lg border pl-10"
        placeholder="강의명이나 강사명으로 검색..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  )
}
