import { useState } from 'react'
import { Button, RangeSlider } from '@/components/common'
import { Calendar, Users } from 'lucide-react'

export function StudyGroupMemberSlider() {
  const [count, setCount] = useState(2)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCount(Number(e.target.value))
  }

  return (
    <section className="border-custom-gray-200 flex w-full flex-col gap-6 rounded-xl border bg-white p-8">
      <h1 className="text-xl font-bold">스터디 기간 및 인원</h1>
      <div className="flex gap-6">
        <div className="flex flex-1 flex-col gap-1">
          <label className="text-custom-gray-700 text-sm font-medium">
            스터디 시작일 <span className="text-red-500">*</span>
          </label>
          <Button
            variant="outline"
            className="text-custom-gray-400 flex h-12 w-full justify-between"
          >
            <p>날짜를 선택하세요</p>
            <Calendar size={16} />
          </Button>
        </div>
        <div className="flex flex-1 flex-col gap-1">
          <label className="text-custom-gray-700 text-sm font-medium">
            스터디 종료일 <span className="text-red-500">*</span>
          </label>
          <Button
            variant="outline"
            className="text-custom-gray-400 flex h-12 w-full justify-between"
          >
            <p>날짜를 선택하세요</p>
            <Calendar size={16} />
          </Button>
        </div>
      </div>
      <div>
        <div className="mb-1">
          <label className="text-custom-gray-700 text-sm font-medium">
            최대 인원 수 <span className="text-red-500">*</span>
          </label>
        </div>
        <div className="flex items-center gap-8">
          <div className="flex-1">
            <RangeSlider
              min={2}
              max={10}
              step={1}
              value={count}
              onChange={handleChange}
            />
            <div className="text-custom-gray-500 mt-2 flex justify-between text-xs font-medium">
              <span>2명</span>
              <span>10명</span>
            </div>
          </div>
          <div className="flex min-w-[60px] items-center gap-2 pb-6">
            <Users className="text-custom-gray-400 h-5 w-5" />
            <span className="text-custom-gray-900 text-xl font-bold">
              {count}
            </span>
            <span className="text-custom-gray-500 text-sm font-medium">명</span>
          </div>
        </div>
      </div>
    </section>
  )
}
