import {
  StudyDetailHero,
  StudyDetailInfo,
  StudyLectureList,
  StudyMemberList,
  StudyNoteList,
  StudyScheduleCalendar,
} from '@/components/studygroup-detail'

export default function StudyDetailPage() {
  return (
    <div className="flex flex-col gap-8 px-8 pb-20">
      {/* 상단 히어로 */}
      <StudyDetailHero />

      {/* 좌측 메인 콘텐츠 */}
      <div className="flex flex-col gap-8 lg:flex-row">
        <div className="flex flex-1 flex-col gap-6">
          <StudyScheduleCalendar />
          <StudyNoteList />
        </div>

        {/* 우측 사이드 정보 */}
        <div className="flex w-full flex-col gap-6 lg:w-[384px]">
          <StudyDetailInfo />
          <StudyLectureList />
          <StudyMemberList />
        </div>
      </div>
    </div>
  )
}
