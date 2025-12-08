import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/common'
import type { StudyNoteMode } from '@/types'

interface StudyNoteBreadcrumbProps {
  mode: StudyNoteMode
}

const NOTE_BREADCRUMB_LABEL: Record<StudyNoteMode, string> = {
  create: '기록 작성',
  edit: '기록 수정',
  detail: '기록 상세',
}

export function StudyNoteBreadcrumb({ mode }: StudyNoteBreadcrumbProps) {
  const breadcrumbLabel = NOTE_BREADCRUMB_LABEL[mode]

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink>홈</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink>스터디 그룹</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        <BreadcrumbItem>
          <BreadcrumbLink>스터디 상세</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbSeparator />

        <BreadcrumbItem>
          <BreadcrumbPage>{breadcrumbLabel}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
