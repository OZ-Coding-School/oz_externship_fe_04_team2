import type { PropsWithChildren } from 'react'

interface ErrorLayoutProps extends PropsWithChildren {
  title: string
  headline: string
  description: string
}

export function ErrorLayout({
  title,
  headline,
  description,
  children,
}: ErrorLayoutProps) {
  return (
    <div className="border-custom-gray-200 bg-custom-gray-50 m-6 flex h-[540px] items-center rounded-2xl border">
      <div className="w-full p-6 text-center">
        <h4 className="text-primary-500 text-[96px]">{title}</h4>
        <p className="text-custom-gray-700 mb-6 text-[20px] font-bold">
          {headline}
        </p>
        <div className="centralize h-28 flex-col gap-4 text-center">
          <p className="text-custom-gray-700 px-8 text-sm md:px-16 md:text-base lg:px-32">
            {description}
          </p>
          {children}
        </div>
      </div>
    </div>
  )
}
