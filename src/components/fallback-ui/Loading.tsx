import { Loader2Icon } from 'lucide-react'

export const Loading = () => {
  return (
    <div className="m-6 h-[278px] justify-center rounded-2xl border border-gray-200 bg-gray-50 text-center">
      <div className="px-auto flex h-full flex-col items-center justify-center text-center">
        <div className="pb-6">
          <div className="flex items-center justify-center pt-12 pb-6">
            <Loader2Icon size={48} className="text-primary-500 animate-spin" />
          </div>
          <p className="mb-2 text-[20px] font-bold text-gray-900">
            데이터를 불러오고 있습니다
          </p>
          <p className="mb-6 text-[16px] text-gray-700">
            첫 항목을 추가해 보세요
          </p>
        </div>
      </div>
    </div>
  )
}
