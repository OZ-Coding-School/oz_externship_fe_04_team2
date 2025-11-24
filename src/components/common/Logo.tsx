import ImageLogoIcon from '@/assets/ImageLogo.svg'
import TextLogoIcon from '@/assets/TextLogo.svg'

export function HeaderLogo() {
  return (
    <div>
      <ImageLogoIcon />
      <div className="hidden md:flex">
        <TextLogoIcon />
      </div>
    </div>
  )
}

export function FooterLogo() {
  return <TextLogoIcon />
}
