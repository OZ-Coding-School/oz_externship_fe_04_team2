import { Button } from '@/components/common'

interface CustomFooterProps {
  selected?: Date
  onClose: () => void
  onConfirm: () => void
}

export default function CustomFooter({
  selected,
  onClose,
  onConfirm,
}: CustomFooterProps) {
  return (
    <div className="flex items-center justify-between">
      <span>
        {selected ? `${selected.toLocaleDateString()}` : '날짜를 선택하세요'}
      </span>

      <div className="flex gap-2">
        <Button variant="outline" onClick={onClose}>
          취소
        </Button>
        {selected ? (
          <Button variant="primary" onClick={onConfirm}>
            선택완료
          </Button>
        ) : (
          <Button variant="secondary" onClick={onConfirm} disabled={!selected}>
            선택 완료
          </Button>
        )}
      </div>
    </div>
  )
}
