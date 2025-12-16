import { NotFound, PageError } from '@/components/fallback-ui'
import { Layout } from '@/components/layout'
import {
  CreateStudyNotePage,
  DetailStudyNotePage,
  EditStudyNotePage,
  StudyDetailPage,
  StudyGroupFormPage,
  StudyGroupPage,
} from '@/pages'
import { ErrorBoundary } from 'react-error-boundary'

import { Route, Routes } from 'react-router'

export function AppRoutes() {
  return (
    <Routes>
      <Route
        element={
          <ErrorBoundary
            fallbackRender={({ error, resetErrorBoundary }) => (
              <PageError
                error={error}
                resetErrorBoundary={resetErrorBoundary}
              />
            )}
          >
            <Layout />
          </ErrorBoundary>
        }
      >
        <Route index element={<StudyGroupPage />} />
        <Route path="/create" element={<StudyGroupFormPage />} />
        <Route path="/:groupId" element={<StudyDetailPage />} />
        <Route path="/:groupId/edit" element={<StudyGroupFormPage />} />
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
