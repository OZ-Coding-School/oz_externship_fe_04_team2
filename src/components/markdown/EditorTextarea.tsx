import { forwardRef } from 'react'

interface EditorTextareaProps {
  value: string
  setValue: (value: string) => void
}

export const EditorTextarea = forwardRef<
  HTMLTextAreaElement,
  EditorTextareaProps
>(({ value, setValue }, ref) => {
  return (
    <textarea
      ref={ref}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="스터디 그룹에 대한 설명을 작성하세요. 마크다운 문법을 사용할 수 있습니다."
      className="remove-focus-outline min-h-[200px] w-full resize-none border-0 p-4"
    ></textarea>
  )
})

EditorTextarea.displayName = 'EditorTextarea'
