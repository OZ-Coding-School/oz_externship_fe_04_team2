import { useEffect } from 'react'
import { useLocation } from 'react-router'

function useScrollToTopOnRouteChange() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto',
    })
  }, [pathname])
}

export function ScrollToTop() {
  useScrollToTopOnRouteChange()
  return null
}
