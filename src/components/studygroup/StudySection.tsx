import { cn } from '@/lib'
import { NoData, NoSearchResult } from '@/components/fallback-ui'
import React from 'react'
import type { StudyGroupResponseType } from '@/types'

interface StudySectionProps {
  name: string
  description: string
  badgeText: string
  badgeColor?: string
  children: React.ReactNode
  className?: string
  searchTerm: string
  items: StudyGroupResponseType[]
}

export function StudySection({
  name,
  description,
  badgeText,
  badgeColor = 'bg-primary-100 text-primary-700',
  children,
  className,
  searchTerm,
  items,
}: StudySectionProps) {
  const isSearching = searchTerm.trim().length > 0
  const isEmpty = items.length === 0

  return (
    <section className={cn('flex flex-col gap-6', className)}>
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <h2 className="text-custom-gray-900 text-xl font-bold">{name}</h2>
          <p className="text-custom-gray-500 text-sm">{description}</p>
        </div>
        <span
          className={cn('rounded-full px-3 py-1 text-xs font-bold', badgeColor)}
        >
          {badgeText}
        </span>
      </div>

      {isSearching && isEmpty ? (
        <NoSearchResult />
      ) : !isSearching && isEmpty ? (
        <NoData />
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {children}
        </div>
      )}
    </section>
  )
}
