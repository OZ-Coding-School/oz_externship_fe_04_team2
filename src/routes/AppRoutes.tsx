import { Layout } from '@/components/layout'
import { Route, Routes } from 'react-router'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* 이곳에 라우팅 추가하기 */}
        <Route index element={<main />} />
      </Route>
    </Routes>
  )
}
