import { cn } from '@/lib'
import type { CaptionLabelProps } from 'react-day-picker'

export default function CustomCaptionLabel(props: CaptionLabelProps) {
  const { children, className, ...rest } = props

  return (
    <span
      {...rest}
      className={cn(
        'flex items-center justify-center gap-2 text-lg font-semibold',
        className
      )}
    >
      <span>{children}</span>
      <span>오늘</span>
    </span>
  )
}
