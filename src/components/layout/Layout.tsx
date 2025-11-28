import { Footer, Header } from '@/components/layout'
import { useState } from 'react'
import { Outlet } from 'react-router'

export function Layout() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false)
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header
        isSideBarOpen={isSideBarOpen}
        setIsSideBarOpen={setIsSideBarOpen}
      />
      <main className="container-1280 min-h-screen grow pt-16">
        <Outlet />
      </main>
      <Footer />
      {isSideBarOpen && (
        <div className="fixed top-0 left-0 h-full w-full bg-black opacity-50 md:hidden"></div>
      )}
    </div>
  )
}
