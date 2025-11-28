import { Button } from '@/components/common'
import { SearchIcon } from 'lucide-react'

export const NoSearchResult = () => {
  return (
    <div className="border-custom-gray-200 bg-custom-gray-50 m-6 flex h-[382px] justify-center rounded-2xl border text-center">
      <div className="flex h-full w-full flex-col items-center justify-center p-6 text-center">
        <div className="mb-6">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <SearchIcon className="text-custom-gray-400 flex h-8 w-8 items-center justify-center" />
          </div>
        </div>

        <p className="text-custom-gray-700 mb-2 text-[20px] font-bold">
          검색 결과가 없습니다
        </p>
        <p className="text-custom-gray-700 mb-6 text-[16px]">
          다른 키워드로 검색해보시거나 필터를 조정해주세요
        </p>
        <div className="flex gap-3">
          <Button size="lg" variant="primary">
            필터초기화
          </Button>
          <Button size="lg" variant="outline">
            새로운 검색
          </Button>
        </div>
      </div>
    </div>
  )
}
