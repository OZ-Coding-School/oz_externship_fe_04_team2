import type { StudyGroupLectureSelectionType } from '@/types'
import {
  LecturePagination,
  SelectableLectureCard,
} from '@/components/studygroup'
import { useLectures } from '@/hooks/useLectures'
import { Loading, NoSearchResult, NotFound } from '@/components/fallback-ui'
import { useEffect, useMemo, useState } from 'react'
import { ITEMS_PER_PAGE } from '@/constants'

interface LectureListProps {
  searchTerm: string
  selectedIds: number[]
  onToggle: (id: number) => void
}

export function LectureList({
  searchTerm,
  selectedIds,
  onToggle,
}: LectureListProps) {
  const { data, isLoading, error } = useLectures()
  const [currentPage, setCurrentPage] = useState(1)

  const filteredData = useMemo(() => {
    if (!data) return []
    return data.filter(
      (lecture: StudyGroupLectureSelectionType) =>
        lecture.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lecture.instructor.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [data, searchTerm])

  const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE)

  const paginatedData = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE
    return filteredData.slice(start, start + ITEMS_PER_PAGE)
  }, [filteredData, currentPage])

  useEffect(() => {
    setCurrentPage(1)
  }, [])

  if (isLoading) return <Loading />
  if (error) return <NotFound />
  if (filteredData.length === 0) return <NoSearchResult variant="lecture" />

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        {paginatedData.map((lecture: StudyGroupLectureSelectionType) => (
          <SelectableLectureCard
            key={lecture.id}
            results={lecture}
            isSelected={selectedIds.includes(lecture.id)}
            onToggle={() => onToggle(lecture.id)}
          />
        ))}
      </div>
      {totalPages > 1 && (
        <LecturePagination
          itemsPerPage={ITEMS_PER_PAGE}
          totalItems={filteredData.length}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  )
}
