import { Eye, EyeOff } from 'lucide-react'

interface StudyNoteToggleProps {
  isOpen: boolean
  onToggle: () => void
}

export function StudyNoteToggle({ isOpen, onToggle }: StudyNoteToggleProps) {
  return (
    <button
      onClick={onToggle}
      className="text-custom-gray-600 hover:text-primary-600 text-sm transition-colors"
    >
      {isOpen ? (
        <span className="flex items-center gap-1">
          <Eye className="h-4 w-4" />
          접기
        </span>
      ) : (
        <span className="flex items-center gap-1">
          <EyeOff className="h-4 w-4" />
          펼치기
        </span>
      )}
    </button>
  )
}
