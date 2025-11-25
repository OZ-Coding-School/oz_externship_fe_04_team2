import type { VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { cardVariants } from '@/constants'

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {}

export function Card({ className, variant, ...props }: CardProps) {
  return <div className={cn(cardVariants({ variant }), className)} {...props} />
}
