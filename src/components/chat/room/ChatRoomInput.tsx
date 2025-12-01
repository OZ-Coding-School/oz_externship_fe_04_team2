import { useChatInput } from '@/hooks/chat'
import { Send } from 'lucide-react'

interface ChatRoomInputProps {
  onSend: (message: string) => void
}

export function ChatRoomInput({ onSend }: ChatRoomInputProps) {
  const { message, handleChange, handleKeyDown, handleSend } =
    useChatInput(onSend)

  return (
    <div className="border-t-custom-gray-200 flex items-center gap-2 border-t p-3 pt-[11px]">
      <textarea
        rows={1}
        placeholder="메시지를 입력하세요..."
        value={message}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        className="border-custom-gray-300 scrollbar-hide flex-1 resize-none rounded-full border px-3 py-2 text-sm"
      />

      <button
        onClick={handleSend}
        className="bg-custom-gray-300 text-custom-gray-50 inline-flex h-8 w-8 items-center justify-center rounded-full"
      >
        <Send className="h-3.5 w-3.5" />
      </button>
    </div>
  )
}
