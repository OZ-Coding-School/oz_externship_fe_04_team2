import { useNavigate } from 'react-router'
import { Button } from '@/components/common'
import { ArrowLeft } from 'lucide-react'

export function BackButton() {
  const navigate = useNavigate()

  return (
    <Button
      variant="ghost"
      onClick={() => navigate(-1)}
      className="bg-custom-gray-100 h-14 w-14 rounded-full"
    >
      <ArrowLeft size={28} />
    </Button>
  )
}
