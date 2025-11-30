import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter } from 'react-router'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return
  }
  const { worker } = await import('@/mocks/browser')

  return worker.start({
    onUnhandledRequest: 'bypass',
  })
}

const root = createRoot(document.getElementById('root')!)

const queryClient = new QueryClient()

enableMocking().then(() => {
  root.render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </StrictMode>
  )
})
