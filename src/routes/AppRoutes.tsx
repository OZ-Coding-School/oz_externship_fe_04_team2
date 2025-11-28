import Layout from '@/layout/Layout'
import { Route, Routes } from 'react-router'
function AppRoutes() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* 이곳에 라우팅 추가하기 */}
        <Route index element={<main />} />
      </Route>
    </Routes>
  )
}
export default AppRoutes
