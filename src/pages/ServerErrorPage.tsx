import { Button } from '@/components/common'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router'

export function ServerErrorPage() {
  const navigate = useNavigate()

  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="border-custom-gray-200 bg-custom-gray-50 m-6 flex h-[540px] items-center rounded-2xl border">
        <div className="w-full p-6 text-center">
          <h4 className="text-primary-500 text-[96px]">500</h4>
          <p className="text-custom-gray-700 mb-6 text-[20px] font-bold">
            서버 오류가 발생했습니다
          </p>
          <div className="centralize h-28 flex-col gap-4 text-center">
            <p className="text-custom-gray-700 px-8 text-sm md:px-16 md:text-base lg:px-32">
              잠시 후 다시 시도해주세요
            </p>
            <Button size="lg" variant="primary" onClick={() => navigate(-1)}>
              <ArrowLeft size={20} className="mr-2" />
              뒤로 가기
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
