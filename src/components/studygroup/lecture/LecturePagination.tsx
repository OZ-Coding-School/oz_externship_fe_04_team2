import { cn } from '@/lib'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface LecturePaginationProps {
  totalItems: number
  itemsPerPage: number
  currentPage: number
  onPageChange: (page: number) => void
}

export function LecturePagination({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}: LecturePaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  if (totalPages <= 1) return null

  return (
    <div className="flex items-center justify-center gap-2 py-4">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 disabled:opacity-30"
      >
        <ChevronLeft size={16} />
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={cn(
            'flex h-8 w-8 items-center justify-center rounded-md text-sm font-medium transition-colors',
            currentPage === page
              ? 'bg-yellow-400 text-white'
              : 'text-gray-600 hover:bg-gray-100'
          )}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 disabled:opacity-30"
      >
        <ChevronRight size={16} />
      </button>
    </div>
  )
}
