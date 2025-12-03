import { Star } from 'lucide-react'
import { cn } from '@/lib'

interface StarRatingProps {
  rating: number
  maxRating?: number
  onRatingChange?: (rating: number) => void
  readonly?: boolean
  size?: number
  className?: string
}

export function StarRating({
  rating,
  maxRating = 5,
  onRatingChange,
  readonly = false,
  size = 20,
  className,
}: StarRatingProps) {
  return (
    <div className={cn('flex items-center gap-1', className)}>
      {Array.from({ length: maxRating }).map((_, index) => {
        const starValue = index + 1
        return (
          <Star
            key={index}
            size={size}
            className={cn(
              'transition-colors',
              readonly ? 'cursor-default' : 'cursor-pointer',
              starValue <= rating
                ? 'fill-primary-500 text-primary-500'
                : 'fill-custom-gray-200 text-custom-gray-200'
            )}
            onClick={() => !readonly && onRatingChange?.(starValue)}
          />
        )
      })}
    </div>
  )
}
