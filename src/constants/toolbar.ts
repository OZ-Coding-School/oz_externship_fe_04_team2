import { BoldIcon, ItalicIcon, CodeIcon, LinkIcon } from 'lucide-react'

export const TOOLBAR_BUTTONS = [
  { key: 'bold', before: '**', after: '**', Icon: BoldIcon },
  { key: 'italic', before: '*', after: '*', Icon: ItalicIcon },
  { key: 'code', before: '`', after: '`', Icon: CodeIcon },
  { key: 'link', before: '[', after: '](https://)', Icon: LinkIcon },
]
