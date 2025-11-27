import { cn } from '@/lib'

interface ChatBadgeProps {
  count: number
  className?: string
}

export function ChatBadge({ count, className }: ChatBadgeProps) {
  if (!count || count <= 0) return null

  return (
    <span
      className={cn(
        'flex h-6 w-6 items-center justify-center rounded-full bg-red-500 px-1 text-xs font-semibold text-white shadow-md',
        className
      )}
    >
      {count > 99 ? '99+' : count}
    </span>
  )
}
