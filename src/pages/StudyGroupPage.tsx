import { Button } from '@/components/common'
import { ReviewListModal, ReviewEditModal } from '@/components/review'
import { SearchInput } from '@/components/search'
import { StudyCard, StudySection } from '@/components/studygroup'
import type { StudyGroupResponseType, StudyGroupReviewType } from '@/types'
import { Plus } from 'lucide-react'
import { useEffect, useState } from 'react'

export function StudyGroupPage() {
  const [studies, setStudies] = useState<StudyGroupResponseType[]>([])
  const [selectedStudy, setSelectedStudy] =
    useState<StudyGroupResponseType | null>(null)
  const [modalType, setModalType] = useState<'none' | 'list' | 'edit'>('none')
  const [reviews, setReviews] = useState<StudyGroupReviewType[]>([])
  const [reviewStats, setReviewStats] = useState({ average: 0, total: 0 })

  useEffect(() => {
    fetch('/api/v1/study-groups')
      .then((res) => res.json())
      .then((data) => setStudies(data))
  }, [])

  const handleOpenReviewList = async (study: StudyGroupResponseType) => {
    setSelectedStudy(study)

    try {
      const groupId = study.id
      const res = await fetch(`/api/v1/study-groups/${groupId}/reviews`)
      const data = await res.json()
      setReviews(data.reviews)
      setReviewStats({ average: data.average_rating, total: data.total_count })
      setModalType('list')
    } catch (error) {
      console.error('리뷰 불러오기 실패', error)
    }
  }

  const handleOpenReviewEdit = (study: StudyGroupResponseType) => {
    setSelectedStudy(study)
    setModalType('edit')
    // 수정일 경우, 기존 리뷰 데이터를 찾아와서 모달에 주입하는 로직이 필요할 수 있지만 현재 ReviewEditModal 구조상 studyName, date만 받으므로 여기까지만 구현)
  }

  const ongoingStudies = studies.filter((s) => s.status === 'ONGOING')
  const pendingStudies = studies.filter((s) => s.status === 'PENDING')
  const endedStudies = studies.filter((s) => s.status === 'ENDED')

  const mapToCardProps = (study: StudyGroupResponseType) => {
    const myReview = study.reviews.find((r) => r.is_mine)
    return {
      image: study.profile_img_url || '/placeholder.png',
      name: study.name,
      statusBadge:
        study.status === 'PENDING'
          ? '대기중'
          : study.status === 'ONGOING'
            ? '진행중'
            : '종료됨',
      statusColor:
        study.status === 'ONGOING'
          ? 'bg-success-500'
          : study.status === 'ENDED'
            ? 'bg-danger-500'
            : 'bg-custom-gray-500',
      roleBadge: study.is_leader ? '리더' : undefined,
      memberCount: `${study.current_headcount}/${study.max_headcount}명`,
      dateRange: `${study.start_at} ~ ${study.end_at}`,
      lectures: study.lectures.map((l) => ({
        title: l.title,
        instructor: l.instructor,
      })),
      variant: (study.status === 'ENDED' ? 'completed' : 'default') as
        | 'default'
        | 'completed',
      rating: myReview ? myReview.star_rating : 0,
      reviewStatus: (myReview ? 'done' : 'none') as 'none' | 'done',
      onActionClick: () => handleOpenReviewEdit(study),
      onDetailClick: () => handleOpenReviewList(study),
    }
  }

  return (
    <div className="flex flex-col gap-8 p-8">
      <header className="mb-6 flex w-full flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2">
          <h2>스터디 그룹</h2>
          <div className="flex flex-col sm:flex-row">
            <p className="mr-1">함께 공부하며 성장하는 스터디 그룹에</p>
            <p>참여해보세요</p>
          </div>
        </div>
        <Button variant="primary" className="mt-4 w-fit md:mt-0">
          <Plus size={16} className="mr-2" />새 스터디 만들기
        </Button>
      </header>
      <SearchInput />
      <section className="flex flex-col gap-8">
        {ongoingStudies.length > 0 && (
          <StudySection
            name="진행중인 스터디"
            description="현재 활발히 진행되고 있는 스터디 그룹들"
            badgeText={`${ongoingStudies.length}개 진행중`}
            badgeColor="bg-success-100 text-success-700"
          >
            {ongoingStudies.map((study) => (
              <StudyCard key={study.id} {...mapToCardProps(study)} />
            ))}
          </StudySection>
        )}
        {pendingStudies.length > 0 && (
          <StudySection
            name="대기중 스터디"
            description="스터디 기간이 시작되지 않은 스터디 그룹들"
            badgeText={`${pendingStudies.length}개 대기중`}
            badgeColor="bg-custom-gray-100 text-custom-gray-600"
          >
            {pendingStudies.map((study) => (
              <StudyCard key={study.id} {...mapToCardProps(study)} />
            ))}
          </StudySection>
        )}
        {endedStudies.length > 0 && (
          <StudySection
            name="완료된 스터디"
            description="성공적으로 마무리된 스터디 그룹들"
            badgeText={`${endedStudies.length}개 종료됨`}
            badgeColor="bg-danger-100 text-danger-600"
          >
            {endedStudies.map((study) => (
              <StudyCard key={study.id} {...mapToCardProps(study)} />
            ))}
          </StudySection>
        )}
      </section>
      {selectedStudy && modalType === 'list' && (
        <ReviewListModal
          isOpen
          onClose={() => setModalType('none')}
          studyName={selectedStudy.name}
          reviews={reviews}
          averageRating={reviewStats.average}
          totalCount={reviewStats.total}
        />
      )}

      {selectedStudy && modalType === 'edit' && (
        <ReviewEditModal
          isOpen
          onClose={() => setModalType('none')}
          studyName={selectedStudy.name}
          studyDate={`${selectedStudy.start_at} ~ ${selectedStudy.end_at}`}
        />
      )}
    </div>
  )
}
