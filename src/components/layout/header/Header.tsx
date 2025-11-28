import logoImg from '@/assets/images/ImageLogo.svg'
import { LoginStateStore } from '@/store'
import { Guest, MobileModal, User } from '@/components/layout'
import { Menu } from 'lucide-react'
import { useNavigate } from 'react-router'
import { ROUTE_PATHS } from '@/constants'

interface HeaderProps {
  isSideBarOpen: boolean
  setIsSideBarOpen: (value: boolean) => void
}

export function Header({ isSideBarOpen, setIsSideBarOpen }: HeaderProps) {
  const navigate = useNavigate()
  const loginState = LoginStateStore((state) => state.loginState)
  const handleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen)
  }

  return (
    <div className="border-custom-gray-200 flex w-full justify-center border-b border-solid bg-white">
      <div className="container-1280 fixed z-100 flex h-16 w-full items-center justify-between px-8">
        {isSideBarOpen && <MobileModal setIsModalOpen={setIsSideBarOpen} />}
        <div className="flex items-center gap-[15px] md:hidden">
          <Menu className="h-8 w-8 cursor-pointer" onClick={handleSideBar} />
          <img
            src={logoImg}
            alt="logoImg"
            className="h-8 w-8 cursor-pointer"
            onClick={() => navigate(ROUTE_PATHS.HOME)}
          />
        </div>
        <div
          className="hidden md:flex md:cursor-pointer md:items-center md:gap-2"
          onClick={() => navigate(ROUTE_PATHS.HOME)}
        >
          <img src={logoImg} alt="logoImg" className="flex h-8 w-8" />
          <h2 className="text-primary-500 text-2xl font-bold">StudyHub</h2>
        </div>
        {/* 로그인 하지 않았을때의 UI */}
        {loginState === 'GUEST' && <Guest />}
        {/* 로그인 했을때 UI */}
        {loginState === 'USER' && <User />}
      </div>
    </div>
  )
}
