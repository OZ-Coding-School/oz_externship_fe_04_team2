import { AppRoutes } from '@/routes'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <>
      <AppRoutes />
      <ToastContainer
        position="top-center"
        autoClose={3000}
        icon={false}
        closeButton={false}
      />
    </>
  )
}
export default App
