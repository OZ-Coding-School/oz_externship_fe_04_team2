import { EXTERNAL_LINKS } from '@/constants'

export function Guest() {
  return (
    <div className="ml-auto flex items-center">
      <div className="text-custom-gray-700 flex items-center gap-8 text-base">
        <div className="hidden md:flex md:gap-8">
          <a
            href={EXTERNAL_LINKS.LECTURES}
            className="hover:text-primary-600 cursor-pointer"
          >
            강의 목록
          </a>
          {/* 클릭하면 강의목록 페이지 렌더링 */}
          <a href="/" className="hover:text-primary-600 cursor-pointer">
            스터디 그룹
          </a>
          {/* 스터디 그룹은 로그인 안되어있으면 로그인 페이지 알림 ui */}
          <a
            href={EXTERNAL_LINKS.RECRUITMENT}
            className="hover:text-primary-600 cursor-pointer"
          >
            구인 공고
          </a>
          {/* 클릭하면 구인공고 페이지 렌더링 */}
        </div>
        <a
          href={EXTERNAL_LINKS.LOGIN}
          className="hover:text-primary-600 text-base md:cursor-pointer md:text-lg"
        >
          로그인
        </a>
        {/* 클릭하면 로그인 페이지 렌더링 */}
      </div>
      <a href={EXTERNAL_LINKS.SIGNUP}>
        <button className="bg-primary-500 text-basic-white ml-4 h-10 w-[90.89px] rounded-lg text-base md:text-lg">
          회원가입
        </button>
      </a>
      {/* 클릭하면 회원가입 페이지 렌더링 */}
    </div>
  )
}
