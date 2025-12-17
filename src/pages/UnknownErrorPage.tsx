import { Button } from '@/components/common'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router'

export function UnknownErrorPage() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="border-custom-gray-200 bg-custom-gray-50 m-6 flex h-[540px] items-center rounded-2xl border">
        <div className="w-full p-6 text-center">
          <h4 className="text-primary-500 text-[96px]">ERROR</h4>
          <p className="text-custom-gray-700 mb-6 text-[20px] font-bold">
            문제가 발생했습니다
          </p>
          <div className="centralize h-28 flex-col gap-4 text-center">
            <p className="text-custom-gray-700 px-8 text-sm md:px-16 md:text-base lg:px-32">
              예기치 못한 오류가 발생했습니다
            </p>
            <Link to="/">
              <Button size="lg" variant="primary">
                홈으로 가기
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
