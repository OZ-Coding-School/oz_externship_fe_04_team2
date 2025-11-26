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

export function MarkdownEditor() {
  const [mode, setMode] = useState<'write' | 'preview'>('write')
  return (
    <div className="border-custom-gray-200 rounded-lg border">
      <header className="bg-custom-gray-50 border-custom-gray-200 flex h-12 items-center justify-between border-b px-4">
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
          placeholder="스터디 그룹에 대한 설명을 작성하세요. 마크다운 문법을 사용할 수 있습니다."
          className="min-h-[200px] w-full resize-none border-0 p-4 focus:ring-0"
        ></textarea>
      ) : (
        <div className="text-custom-gray-900 min-h-[200px] w-full border-0 p-4 focus:ring-0">
          미리보기
        </div>
      )}
      <div className="text-custom-gray-600 border-custom-gray-200 bg-custom-gray-50 flex h-8 items-center gap-2 border-t px-4 text-sm font-medium">
        <p className="font-normal">마크다운 문법을 사용할 수 있습니다.</p>
        <span>**굵게**</span>
        <span>*기울임*</span>
        <span>`코드`</span>
        <span>[링크](URL)</span>
        <span>## 제목</span>
      </div>
    </div>
  )
}
