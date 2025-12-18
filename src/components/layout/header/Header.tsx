import logoImg from '@/assets/images/ImageLogo.svg'
import { LoginStateStore } from '@/store'
import { Guest, MobileModal, User } from '@/components/layout'
import { Menu } from 'lucide-react'
import { EXTERNAL_LINKS } from '@/constants'

interface HeaderProps {
  isSideBarOpen: boolean
  setIsSideBarOpen: (value: boolean) => void
}

export function Header({ isSideBarOpen, setIsSideBarOpen }: HeaderProps) {
  const loginState = LoginStateStore((state) => state.loginState)
  const handleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen)
  }

  return (
    <div className="border-custom-gray-200 z-100 flex w-full justify-center border-b border-solid bg-white">
      <div className="container-1280 fixed flex h-16 w-full items-center justify-between bg-white px-8">
        {isSideBarOpen && <MobileModal setIsModalOpen={setIsSideBarOpen} />}
        <div className="flex items-center gap-[15px] md:hidden">
          <Menu className="h-8 w-8 cursor-pointer" onClick={handleSideBar} />
          <a href={EXTERNAL_LINKS.MAIN_PAGE}>
            <img
              src={logoImg}
              alt="logoImg"
              className="h-8 w-8 cursor-pointer"
            />
          </a>
        </div>
        <a href={EXTERNAL_LINKS.MAIN_PAGE}>
          <div className="hidden w-40 md:flex md:cursor-pointer md:items-center md:gap-2">
            <img src={logoImg} alt="logoImg" className="flex h-8 w-8" />
            <h2 className="text-primary-500 text-2xl font-bold">StudyHub</h2>
          </div>
        </a>
        {/* 로그인 하지 않았을때의 UI */}
        {loginState === 'GUEST' && <Guest />}
        {/* 로그인 했을때 UI */}
        {loginState === 'USER' && <User />}
      </div>
    </div>
  )
}
