import { Button } from '@/components/common'
import { TOOLBAR_BUTTONS } from '@/constants'
import {
  ToolbarDropdownHeading,
  ToolbarDropdownList,
} from '@/components/markdown'

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
          <Icon size={18} />
        </Button>
      ))}
      <ToolbarDropdownHeading insertMarkdown={insertMarkdown} />
      <ToolbarDropdownList insertMarkdown={insertMarkdown} />
    </menu>
  )
}
