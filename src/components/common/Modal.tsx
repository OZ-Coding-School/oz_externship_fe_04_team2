import { Button } from '@/components/common/Button'
import { cn } from '@/lib'
import { XIcon } from 'lucide-react'
import type { ReactNode, MouseEvent } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
  className?: string
  wrapperClassName?: string
  innerClassName?: string
  titleClassName?: string
  title: ReactNode
}

export function Modal({
  isOpen,
  onClose,
  children,
  className,
  wrapperClassName,
  innerClassName,
  titleClassName,
  title,
}: ModalProps) {
  if (!isOpen) return null

  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div
      className={`centralize bg-custom-gray-800/50 fixed inset-0 z-100 h-full w-full backdrop-blur-sm ${className ?? ''}`}
      onClick={handleBackdropClick}
    >
      <div
        className={cn(
          'modal modal-wrapper relative m-10 flex h-4/5 w-full flex-col',
          wrapperClassName
        )}
        role="dialog"
        aria-modal="true"
      >
        <div
          className={(cn('flex items-start justify-between'), titleClassName)}
        >
          <h2 className="text-custom-gray-900 mt-1 text-xl font-bold">
            {title}
          </h2>
          <Button
            variant="ghost"
            size="icon"
            className="text-custom-gray-400 h-8 w-8"
            onClick={onClose}
            aria-label="닫기"
          >
            <XIcon size={20} />
          </Button>
        </div>
        <div
          className={cn(
            'centralize mb-8 h-full flex-col gap-6 overflow-y-auto p-4',
            innerClassName
          )}
        >
          {children}
        </div>
      </div>
    </div>
  )
}
