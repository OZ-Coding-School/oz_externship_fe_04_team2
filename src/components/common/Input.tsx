import * as React from 'react'
import { cn } from '@/lib'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string | boolean
  icon?: React.ReactNode
  required?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    { className, type, label, error, icon, required, disabled, ...props },
    ref
  ) => {
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
        <div className="relative">
          {icon && (
            <div className="absolute top-1/2 left-3 -translate-y-1/2 text-gray-400">
              {icon}
            </div>
          )}
          <input
            type={type}
            className={cn(
              'flex h-11 w-full rounded-md border bg-white px-3 py-2 text-sm transition-colors',
              'file:border-0 file:bg-transparent file:text-sm file:font-medium',
              'placeholder:text-gray-400 focus-visible:ring-1 focus-visible:outline-none',
              'disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-400 disabled:opacity-100',

              icon ? 'pl-10' : 'pl-3',

              error
                ? 'border-danger-500 focus-visible:ring-danger-500'
                : 'border-gray-200 focus-visible:border-yellow-500 focus-visible:ring-yellow-500',

              className
            )}
            ref={ref}
            disabled={disabled}
            {...props}
          />
        </div>

        {typeof error === 'string' && (
          <p className="text-danger-500 text-xs font-medium">{error}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export { Input }
