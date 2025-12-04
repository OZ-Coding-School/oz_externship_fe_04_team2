import { BackButton } from '@/components/studygroup'

interface PageHeaderProps {
  title: string
  description: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="flex items-center gap-4">
      <BackButton />
      <div className="flex flex-col gap-1">
        <h1 className="text-custom-gray-900 text-3xl">{title}</h1>
        <p className="text-custom-gray-600">{description}</p>
      </div>
    </div>
  )
}
