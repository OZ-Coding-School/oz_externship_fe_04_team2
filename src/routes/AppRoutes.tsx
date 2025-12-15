import { NotFound } from '@/components/fallback-ui'
import { Layout } from '@/components/layout'
import {
  CreateStudyGroupPage,
  CreateStudyNotePage,
  DetailStudyNotePage,
  EditStudyNotePage,
  StudyDetailPage,
  StudyGroupPage,
} from '@/pages'

import { Route, Routes } from 'react-router'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<StudyGroupPage />} />
        <Route path="/create" element={<CreateStudyGroupPage />} />
        <Route path="/:groupId" element={<StudyDetailPage />} />
        <Route
          path="/:groupId/notes/create"
          element={<CreateStudyNotePage />}
        />
        <Route
          path="/:groupId/notes/:noteId"
          element={<DetailStudyNotePage />}
        />
        <Route
          path="/:groupId/notes/:noteId/edit"
          element={<EditStudyNotePage />}
        />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
