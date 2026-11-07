import Image from 'next/image'

export function BrandWatermark({ variant, className }: { variant: 'black' | 'white'; className?: string }) {
  return (
    <Image
      className={`brand-watermark ${className ?? ''}`}
      src={variant === 'white' ? '/logo-white.webp' : '/logo-black.webp'}
      alt=""
      aria-hidden="true"
      width={640}
      height={666}
    />
  )
}
