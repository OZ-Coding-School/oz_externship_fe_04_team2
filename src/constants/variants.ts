import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-white',
  {
    variants: {
      variant: {
        primary:
          'bg-yellow-500 text-white hover:bg-yellow-600 active:bg-yellow-700',
        secondary:
          'bg-gray-100 text-gray-900 hover:bg-gray-200 active:bg-gray-400',
        outline:
          'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 active:bg-gray-100',
        ghost:
          'bg-transparent text-gray-700 hover:bg-gray-100 active:bg-gray-200',
        danger: 'bg-red-500 text-white hover:bg-red-600 active:bg-red-700',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-lg px-3',
        lg: 'h-11 rounded-lg px-8 text-base',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  }
)

export const cardVariants = cva(
  'rounded-lg bg-white text-slate-900 w-full p-6',
  {
    variants: {
      variant: {
        default: 'border border-custom-gray-200',
        outlined: 'border-2 border-custom-gray-300',
        elevated: 'shadow-lg border-none',
        flat: 'border-none shadow-none bg-custom-gray-50',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export const badgeVariants = cva(
  'inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'bg-custom-gray-100 text-custom-gray-800',
        primary: 'bg-primary-100 text-primary-800',
        success: 'bg-success-100 text-success-800',
        danger: 'bg-danger-100 text-danger-800',
      },
      size: {
        sm: 'text-[10px] px-2 py-0.5 h-5',
        md: 'text-xs px-2.5 py-0.5 h-7',
        lg: 'text-sm px-3 py-1 h-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

export const checkboxVariants = cva(
  'peer h-5 w-5 cursor-pointer appearance-none border bg-white transition-all focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 border-custom-gray-300 hover:border-primary-400 checked:border-primary-500 checked:bg-primary-500',
  {
    variants: {
      shape: {
        square: 'rounded-sm',
        round: 'rounded-full',
      },
    },
    defaultVariants: {
      shape: 'square',
    },
  }
)
