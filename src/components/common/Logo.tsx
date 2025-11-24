import ImageLogoIcon from '@/assets/ImageLogo.svg?react'
import TextLogoIcon from '@/assets/TextLogo.svg?react'

export function HeaderLogo() {
  return (
    <div className="flex items-center gap-2">
      <ImageLogoIcon className="h-7 w-7" />
      <div className="hidden md:flex">
        <TextLogoIcon className="mt-1 w-20" />
      </div>
    </div>
  )
}

export function FooterLogo() {
  return <TextLogoIcon />
}
