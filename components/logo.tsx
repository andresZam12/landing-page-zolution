import Image from 'next/image'

export function Logo({ variant = 'black' }: { variant?: 'black' | 'white' }) {
  return (
    <a href="#inicio" className="logo">
      <Image
        className="logo-mark"
        src={variant === 'white' ? '/logo-white.webp' : '/logo-black.webp'}
        alt=""
        width={30}
        height={31}
        priority
      />
      <span>Zabio</span>
    </a>
  )
}
