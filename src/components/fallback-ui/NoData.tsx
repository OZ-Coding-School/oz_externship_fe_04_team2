import { Inbox, Plus } from 'lucide-react'
import { Button } from '@/components/common'

export const NoData = () => {
  return (
    <div className="border-custom-gray-200 bg-custom-gray-50 m-6 h-[382px] justify-center rounded-2xl border text-center">
      <div className="centralize h-full w-full flex-col p-6 text-center">
        <div className="mb-6">
          <div className="bg-primary-50 centralize h-20 w-20 rounded-full">
            <Inbox className="text-primary-500 centralize h-8 w-8" />
          </div>
        </div>

        <p className="text-custom-gray-700 text-5 mb-2 font-bold">
          아직 데이터가 없습니다
        </p>
        <p className="text-custom-gray-700 mb-6 text-[16px]">
          첫 항목을 추가해 보세요
        </p>
        <div>
          <Button size="lg" variant="primary">
            <Plus size={16} className="mr-2" />
            새로 만들기
          </Button>
        </div>
      </div>
    </div>
  )
}
