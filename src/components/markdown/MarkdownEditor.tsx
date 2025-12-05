import { useState } from 'react'
import {
  EditorHeader,
  EditorTextarea,
  MarkdownExample,
  Preview,
} from '@/components/markdown'
import { useMarkdownEditor } from '@/hooks'

export function MarkdownEditor() {
  const { value, setValue, textareaRef, insertMarkdown } = useMarkdownEditor()
  const [mode, setMode] = useState<'write' | 'preview'>('write')

  return (
    <div className="border-custom-gray-200 rounded-lg border">
      <EditorHeader
        mode={mode}
        setMode={setMode}
        insertMarkdown={insertMarkdown}
      />
      {mode === 'write' ? (
        <EditorTextarea ref={textareaRef} value={value} setValue={setValue} />
      ) : (
        <Preview value={value} />
      )}
      <MarkdownExample />
    </div>
  )
}
