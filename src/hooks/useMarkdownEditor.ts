import { useCallback, useRef, useState } from 'react'

export function useMarkdownEditor() {
  const [value, setValue] = useState('')
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

  const insertMarkdown = useCallback(
    (before: string, after: string = '') => {
      const textarea = textareaRef.current
      if (!textarea) return

      const start = textarea.selectionStart
      const end = textarea.selectionEnd

      const selected = value.slice(start, end)
      const replaced = before + (selected || '') + after

      setValue(value.slice(0, start) + replaced + value.slice(end))

      requestAnimationFrame(() => {
        if (!textareaRef.current) return
        const next = start + replaced.length
        textareaRef.current.focus()
        textareaRef.current.selectionStart = next
        textareaRef.current.selectionEnd = next
      })
    },
    [value]
  )

  return {
    value,
    setValue,
    textareaRef,
    insertMarkdown,
  }
}
