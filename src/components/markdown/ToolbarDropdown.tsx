import { IconDropdown } from '@/components/common'
import { headingOptions, listOptions } from '@/constants'
import { Heading1Icon, ListIcon } from 'lucide-react'

interface ToolbarDropdownProps {
  insertMarkdown: (before: string, after?: string) => void
}

export function ToolbarDropdownHeading({
  insertMarkdown,
}: ToolbarDropdownProps) {
  return (
    <IconDropdown
      options={headingOptions}
      triggerIcon={<Heading1Icon />}
      onChange={(value) => {
        const option = headingOptions.find((o) => o.value === value)
        if (option) insertMarkdown(option.before)
      }}
    />
  )
}

export function ToolbarDropdownList({ insertMarkdown }: ToolbarDropdownProps) {
  return (
    <IconDropdown
      options={listOptions}
      triggerIcon={<ListIcon />}
      onChange={(value) => {
        const option = listOptions.find((o) => o.value === value)
        if (option) insertMarkdown(option.before)
      }}
    />
  )
}
