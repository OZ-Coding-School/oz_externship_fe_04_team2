import React from 'react'
import { Check } from 'lucide-react'
import type { VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'
import { checkboxVariants } from '@/constants'

export interface CheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof checkboxVariants> {
  label?: string
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, id, shape, ...props }, ref) => {
    const generatedId = React.useId()
    const uniqueId = id ?? generatedId

    return (
      <div className="flex items-center gap-3">
        <div className="centralize relative">
          <input
            type="checkbox"
            id={uniqueId}
            ref={ref}
            className={cn(checkboxVariants({ shape }), className)}
            {...props}
          />
          <Check
            size={14}
            strokeWidth={3}
            className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 transition-opacity peer-checked:opacity-100"
          />
        </div>
        {label && (
          <label
            htmlFor={uniqueId}
            className="text-custom-gray-800 cursor-pointer text-base font-medium select-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
          </label>
        )}
      </div>
    )
  }
)
Checkbox.displayName = 'Checkbox'
