import { Button } from '@/components/common'
import {
  PageHeader,
  StudyGroupInfo,
  StudyGroupLectures,
  StudyGroupMemberSlider,
} from '@/components/studygroup'

export function CreateStudyGroupPage() {
  return (
    <div className="bg-custom-gray-50 flex w-full flex-col gap-8 p-8">
      <PageHeader
        title="새 스터디 그룹 만들기"
        description="함께 공부할 멤버들과 스터디 그룹을 시작해보세요"
      />
      <StudyGroupInfo />
      <StudyGroupMemberSlider />
      <StudyGroupLectures />
      <div className="flex w-full justify-end gap-4">
        <Button variant="outline">취소</Button>
        <Button variant="primary" className="px-8">
          스터디 그룹 만들기
        </Button>
      </div>
    </div>
  )
}
