import { Layout } from '@/components/layout'
import { useApiError } from '@/hooks'
import {
  CreateStudyNotePage,
  DetailStudyNotePage,
  EditStudyNotePage,
  NotFoundPage,
  ServerErrorPage,
  StudyDetailPage,
  StudyGroupFormPage,
  StudyGroupPage,
  UnknownErrorPage,
} from '@/pages'
import { ErrorBoundary } from 'react-error-boundary'
import { Route, Routes } from 'react-router'

function ErrorFallback({ error }: { error: Error }) {
  useApiError(error)
  return null
}

export function AppRoutes() {
  return (
    <Routes>
      <Route
        element={
          <ErrorBoundary fallbackRender={ErrorFallback}>
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
        <Route path="/error">
          <Route path="/error/404" element={<NotFoundPage />} />
          <Route path="/error/500" element={<ServerErrorPage />} />
          <Route index element={<UnknownErrorPage />} />
        </Route>
      </Route>
    </Routes>
  )
}
