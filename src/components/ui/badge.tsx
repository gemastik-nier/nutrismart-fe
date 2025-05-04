import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  'inline-flex items-center rounded-base border-2 border-black px-2.5 font-base py-0.5 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-mtext hover:bg-primary/80',
        secondary:
          'border-transparent bg-secondary text-mtext hover:bg-secondary/80',
        destructive:
          'border-transparent bg-red-500 text-white hover:bg-red-500/80',
        outline: 'text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }