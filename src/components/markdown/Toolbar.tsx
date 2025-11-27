import { Heading1Icon, ListIcon } from 'lucide-react'
import { Button } from '@/components/common'
import { TOOLBAR_BUTTONS } from '@/constants'

interface ToolbarProps {
  insertMarkdown: (before: string, after?: string) => void
}

export function Toolbar({ insertMarkdown }: ToolbarProps) {
  return (
    <menu className="flex items-center gap-4">
      {TOOLBAR_BUTTONS.map(({ key, before, after, Icon }) => (
        <Button
          key={key}
          variant="ghost"
          size="icon"
          onClick={() => insertMarkdown(before, after)}
        >
          <Icon size={20} />
        </Button>
      ))}
      <Button variant="ghost" size="icon">
        <Heading1Icon size={20} />
      </Button>
      <Button variant="ghost" size="icon">
        <ListIcon size={20} />
      </Button>
    </menu>
  )
}
