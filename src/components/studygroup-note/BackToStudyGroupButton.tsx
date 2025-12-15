import { Button } from '@/components/common'
import { ArrowLeft } from 'lucide-react'
import { useNavigate, useParams } from 'react-router'

export function BackToStudyGroupButton() {
  const navigate = useNavigate()
  const { groupId } = useParams<{ groupId: string }>()

  return (
    <Button
      variant="ghost"
      onClick={() => navigate(`/${groupId}`)}
      className="w-1/2 justify-start"
    >
      <ArrowLeft className="pr-2" />
      스터디 그룹으로 돌아가기
    </Button>
  )
}
