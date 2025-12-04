import { Badge, Button } from '@/components/common'
import { Calendar, LogOutIcon, Pencil, UsersRound } from 'lucide-react'

export function StudyDetailHero() {
  return (
    <section className="border-custom-gray-200 overflow-hidden rounded-xl border">
      <div className="relative aspect-[16/9] w-full md:h-[480px] lg:h-[608px]">
        {/* 배경 이미지 */}
        <img
          src="https://randomuser.me/api/portraits/lego/1.jpg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* 이미지 오버레이 */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="absolute inset-0 flex flex-col justify-between p-6">
          {/* 상단 버튼 */}
          <div className="flex justify-end gap-3">
            <Button variant="secondary" className="gap-2 text-base">
              <Pencil className="h-4 w-4" />
              <span>수정하기</span>
            </Button>
            <Button variant="danger" className="gap-2 text-base">
              <LogOutIcon className="h-4 w-4" />
              <span>나가기</span>
            </Button>
          </div>

          {/* 스터디 정보 */}
          <div className="flex flex-col gap-2">
            <h1 className="text-custom-gray-50 text-xl sm:text-2xl md:text-3xl">
              React 실무 프로젝트 스터디
            </h1>
            <ul className="text-custom-gray-100 flex gap-2">
              <li className="flex items-center gap-1">
                <UsersRound className="h-4 w-4" /> 0/0명
              </li>
              <li className="flex items-center gap-1">
                <Calendar className="h-4 w-4" /> 2024. 2. 1. ~ 2024. 4. 30.
              </li>
              <li>
                <Badge>진행중</Badge>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
