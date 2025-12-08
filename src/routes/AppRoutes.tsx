import { Layout } from '@/components/layout'
import {
  CreateStudyGroupPage,
  CreateStudyNotePage,
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
        <Route path="study-groups/:groupId" element={<StudyDetailPage />} />
        <Route
          path="study-groups/:groupId/notes/create"
          element={<CreateStudyNotePage />}
        />
      </Route>
    </Routes>
  )
}
