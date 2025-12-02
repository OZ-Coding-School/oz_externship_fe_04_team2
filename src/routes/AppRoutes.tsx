import { Layout } from '@/components/layout'
import { StudyDetailPage, StudyGroupPage } from '@/pages'
import { Route, Routes } from 'react-router'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<StudyGroupPage />} />
        <Route path="study-groups/:groupId" element={<StudyDetailPage />} />
      </Route>
    </Routes>
  )
}
