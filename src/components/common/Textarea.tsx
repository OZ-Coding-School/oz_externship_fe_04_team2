import { cn } from '@/lib'
import { forwardRef, type TextareaHTMLAttributes } from 'react'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  required?: boolean
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, required, ...props }, ref) => {
    return (
      <div className="w-full space-y-1.5">
        {label && (
          <label
            className={cn(
              'text-sm leading-none font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
              error ? 'text-danger-500' : 'text-custom-gray-700'
            )}
          >
            {label}
            {required && <span className="text-danger-500 ml-1">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          className={cn(
            'flex min-h-[88px] w-full resize-none overflow-y-auto rounded-md border bg-white px-3 py-2 text-sm transition-colors',
            'placeholder:text-custom-gray-400 focus-visible:ring-1 focus-visible:outline-none',
            'disabled:bg-custom-gray-50 disabled:text-custom-gray-400 disabled:cursor-not-allowed disabled:opacity-100',

            error
              ? 'border-danger-500 focus-visible:ring-danger-500'
              : 'border-custom-gray-200 focus-visible:border-primary-500 focus-visible:ring-primary-500',

            className
          )}
          {...props}
        />

        {typeof error === 'string' && (
          <p className="text-danger-500 text-xs font-medium">{error}</p>
        )}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'
