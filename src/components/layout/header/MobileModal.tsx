import { LoginStateStore } from '@/store'
import logoImg from '@/assets/images/ImageLogo.svg'
import { useUserData } from '@/hooks/queries'
import {
  BookIcon,
  LogOutIcon,
  MegaphoneIcon,
  UserRound,
  Users,
  XIcon,
} from 'lucide-react'

interface MobileModalProps {
  setIsModalOpen: (value: boolean) => void
}

export function MobileModal({ setIsModalOpen }: MobileModalProps) {
  const loginState = LoginStateStore((state) => state.loginState)
  const { data } = useUserData()
  return (
    <div className="fixed top-0 left-0 z-10 h-screen w-[263px] bg-white pt-4 md:hidden">
      <div className="border-custom-gray-200 border-b border-solid">
        <div className="ml-4 flex items-center gap-43 pb-[15px]">
          <img src={logoImg} alt="logo" className="h-8 w-8" />
          <XIcon
            className="text-custom-gray-600 h-7 w-7"
            onClick={() => setIsModalOpen(false)}
          />
        </div>
      </div>
      <div className="ml-7 flex flex-col gap-2 py-4">
        <span className="text-custom-gray-400 flex h-9 items-center text-base font-semibold">
          메뉴
        </span>
        <div className="flex h-[48px] items-center gap-3">
          <BookIcon className="text-custom-gray-600 h-5 w-5" />
          <a href="">강의 목록</a>
          {/* 강의목록 페이지로 렌더링 */}
        </div>
        <div className="flex h-[48px] items-center gap-3">
          <Users className="text-custom-gray-600 h-5 w-5" />
          <a href="">스터디 그룹</a>
          {/* 로그인 화면으로 렌더링 */}
        </div>
        <div className="flex h-[48px] items-center gap-3">
          <MegaphoneIcon className="text-custom-gray-600 h-5 w-5" />
          <a href="">구인 광고</a>
          {/* 구인광고 페이지로 렌더링 */}
        </div>
      </div>
      {/* user 일때만 나타나게 */}
      {loginState === 'USER' && (
        <div className="border-custom-gray-200 absolute bottom-[70px] flex h-[117px] w-full flex-col gap-3 border-t border-solid p-4">
          <div className="flex items-center gap-3">
            <img
              src={data[0]?.profile_img_url}
              alt="profile_img"
              className="h-15 w-15 rounded-full"
            />
            {/* 추후 api 연동으로 이미지 불러오게 */}
            <div className="flex flex-col">
              <span className="text-custom-gray-900 text-base font-semibold">
                {data[0]?.name}
              </span>
              <span className="text-custom-gray-600 text-base font-normal">
                {data[0]?.email}
              </span>
              {/* 추후 api 연동으로 이름 및 이메일 불러오게 */}
            </div>
          </div>
          <button className="bg-primary-100 flex cursor-pointer items-center justify-center gap-[13px] rounded-lg px-4 py-2">
            <UserRound className="text-primary-600 h-5 w-5" />
            <span className="text- text-primary-600 text-base font-medium">
              마이페이지
            </span>
          </button>
          <button className="bg-custom-gray-100 flex cursor-pointer items-center justify-center gap-[13px] rounded-lg px-4 py-2">
            <LogOutIcon className="text-custom-gray-600 h-5 w-5" />
            <span className="text-custom-gray-700 text-base font-medium">
              로그아웃
            </span>
          </button>
          {/* 버튼 컴포넌트 완료되면 버튼 컴포넌트로 커스텀 + 로그아웃 시키기 */}
        </div>
      )}
    </div>
  )
}
