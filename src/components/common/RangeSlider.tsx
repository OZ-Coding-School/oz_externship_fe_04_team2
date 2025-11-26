import { cn } from '@/lib'
import React from 'react'

export type RangeSliderProps = React.InputHTMLAttributes<HTMLInputElement>

export const RangeSlider = React.forwardRef<HTMLInputElement, RangeSliderProps>(
  ({ className, min = 0, max = 100, value, ...props }, ref) => {
    const currentValue = Number(value || min)
    const minVal = Number(min)
    const maxVal = Number(max)

    const percentage = ((currentValue - minVal) / (maxVal - minVal)) * 100

    return (
      <input
        type="range"
        ref={ref}
        min={min}
        max={max}
        value={value}
        style={{
          background: `linear-gradient(to right, #93c5fd ${percentage}%, #e5e7eb ${percentage}%)`,
        }}
        className={cn(
          'bg-custom-gray-200 remove-focus-outline h-2 w-full cursor-pointer appearance-none rounded-full disabled:cursor-not-allowed disabled:opacity-50',

          '[&::-webkit-slider-thumb]:appearance-none',
          '[&::-webkit-slider-thumb]:h-5',
          '[&::-webkit-slider-thumb]:w-5',
          '[&::-webkit-slider-thumb]:rounded-full',
          '[&::-webkit-slider-thumb]:bg-blue-500',
          '[&::-webkit-slider-thumb]:border-2',
          '[&::-webkit-slider-thumb]:border-white',
          '[&::-webkit-slider-thumb]:shadow-md',
          '[&::-webkit-slider-thumb]:transition-all',
          '[&::-webkit-slider-thumb]:hover:scale-110',

          '[&::-moz-range-thumb]:h-5',
          '[&::-moz-range-thumb]:w-5',
          '[&::-moz-range-thumb]:rounded-full',
          '[&::-moz-range-thumb]:bg-blue-500',
          '[&::-moz-range-thumb]:border-none',
          '[&::-moz-range-thumb]:shadow-md',
          '[&::-moz-range-thumb]:transition-all',
          '[&::-moz-range-thumb]:hover:scale-110',

          className
        )}
        {...props}
      />
    )
  }
)

RangeSlider.displayName = 'RangeSlider'
