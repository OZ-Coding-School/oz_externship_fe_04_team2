import { Button } from '@/components/common'
import { ArrowLeft, X } from 'lucide-react'

interface ChatHeaderProps {
  title: string
  onlineCount?: number
  showBackButton?: boolean
  onBack?: () => void
  onClose: () => void
}

export default function ChatHeader({
  title,
  onlineCount,
  showBackButton,
  onBack,
  onClose,
}: ChatHeaderProps) {
  return (
    <header className="bg-custom-gray-50 border-b-custom-gray-200 flex items-center justify-between gap-2 border-b px-4 pt-4 pb-[15px]">
      {showBackButton && (
        <Button variant="ghost" onClick={onBack} className="h-8 w-8 p-0">
          <ArrowLeft className="text-custom-gray-600 h-[18px] w-[18px]" />
        </Button>
      )}

      <div className="flex-1">
        <span className="text-custom-gray-900 text-base font-semibold">
          {title}
        </span>
        {typeof onlineCount === 'number' && (
          <div className="text-custom-gray-600 text-xs">
            <span className="bg-success-500 mr-1 inline-block h-2 w-2 rounded-full" />
            <span>{onlineCount}명 온라인</span>
          </div>
        )}
      </div>

      <Button variant="ghost" onClick={onClose} className="h-8 w-8 p-0">
        <X className="text-custom-gray-400 h-[18px] w-[18px]" />
      </Button>
    </header>
  )
}
