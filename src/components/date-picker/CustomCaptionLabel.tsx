import { Button } from '@/components/common'
import { cn } from '@/lib'
import type { CaptionLabelProps } from 'react-day-picker'

interface CustomCaptionLabelProps extends CaptionLabelProps {
  handleClickToday: () => void
}

export function CustomCaptionLabel(props: CustomCaptionLabelProps) {
  const { children, className, handleClickToday, ...rest } = props

  return (
    <span {...rest} className={cn('flex h-10 items-center gap-2', className)}>
      <span className="text-custom-gray-900 font-semibold">{children}</span>
      <Button
        type="button"
        variant="ghost"
        className="text-primary-600 px-2"
        onClick={handleClickToday}
      >
        오늘
      </Button>
    </span>
  )
}
