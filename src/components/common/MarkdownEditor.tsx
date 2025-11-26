import {
  BoldIcon,
  CodeIcon,
  Heading1Icon,
  ItalicIcon,
  LinkIcon,
  ListIcon,
} from 'lucide-react'
import { Button } from './Button'
import { useState } from 'react'
import { editorTabVariants } from '@/constants'
import { markdownToHtml } from '@/lib/markdown'

export function MarkdownEditor() {
  const [mode, setMode] = useState<'write' | 'preview'>('write')
  const [value, setValue] = useState('')

  return (
    <div className="border-custom-gray-200 rounded-lg border">
      <header className="bg-custom-gray-50 border-custom-gray-200 flex h-22 flex-col justify-evenly border-b px-4 sm:h-12 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex gap-4 font-medium">
          <div
            className={editorTabVariants({ active: mode === 'write' })}
            onClick={() => setMode('write')}
          >
            작성
          </div>
          <div
            className={editorTabVariants({ active: mode === 'preview' })}
            onClick={() => setMode('preview')}
          >
            미리보기
          </div>
        </div>
        {mode === 'write' && (
          <menu className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <BoldIcon size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <ItalicIcon size={18} />
            </Button>
            <Button variant="ghost" size="icon">
              <CodeIcon size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <LinkIcon size={16} />
            </Button>
            <Button variant="ghost" size="icon">
              <Heading1Icon size={20} />
            </Button>
            <Button variant="ghost" size="icon">
              <ListIcon size={20} />
            </Button>
          </menu>
        )}
      </header>
      {mode === 'write' ? (
        <textarea
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="스터디 그룹에 대한 설명을 작성하세요. 마크다운 문법을 사용할 수 있습니다."
          className="remove-focus-outline min-h-[200px] w-full resize-none border-0 p-4"
        ></textarea>
      ) : (
        <div
          className="text-custom-gray-900 remove-focus-outline markdown-content min-h-[200px] w-full list-inside border-0 p-4"
          dangerouslySetInnerHTML={{ __html: markdownToHtml(value) }}
          style={{ listStyle: 'decimal' }}
        />
      )}
      <div className="text-custom-gray-600 border-custom-gray-200 bg-custom-gray-50 flex h-18 flex-col justify-center gap-2 border-t px-4 text-xs font-medium sm:h-12 md:h-8 md:flex-row md:items-center md:justify-start">
        <p className="font-normal">마크다운 문법을 사용할 수 있습니다.</p>
        <div className="flex flex-col gap-0.5 sm:flex-row md:gap-2">
          <div className="flex gap-2">
            <span>**굵게**</span>
            <span>*기울임*</span>
            <span>`코드`</span>
            <span>[링크](URL)</span>
          </div>
          <div className="flex gap-2">
            <span>## 제목</span>
            <span>- 목록</span>
            <span>![설명](이미지URL)</span>
          </div>
        </div>
      </div>
    </div>
  )
}
