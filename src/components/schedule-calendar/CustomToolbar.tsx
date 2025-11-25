import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { ToolbarProps } from 'react-big-calendar'

export default function CustomToolbar({ label, onNavigate }: ToolbarProps) {
  return (
    <div className="mb-4 flex items-center justify-between">
      <button
        className="p-2 hover:bg-gray-100"
        onClick={() => onNavigate('PREV')}
      >
        <ChevronLeft className="h-4 w-4 rounded-sm text-gray-600" />
      </button>
      <div className="text-lg font-semibold text-gray-900">{label}</div>
      <button
        className="p-2 hover:bg-gray-100"
        onClick={() => onNavigate('NEXT')}
      >
        <ChevronRight className="h-4 w-4 rounded-sm text-gray-600" />
      </button>
    </div>
  )
}
