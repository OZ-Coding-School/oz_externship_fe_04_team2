export const STATUS_INDICATOR = {
  online: 'bg-success-500 h-2 w-2 rounded-full',
  offline: 'bg-custom-gray-300 h-2 w-2 rounded-full',
} as const

export const CHAT_BUBBLE = {
  outgoing:
    'bg-primary-500 text-custom-gray-50 rounded-lg whitespace-pre-wrap rounded-br-xs px-3 py-2 text-sm',
  incoming:
    'bg-custom-gray-100 text-custom-gray-900 whitespace-pre-wrap rounded-lg rounded-bl-xs px-3 py-2 text-sm',
} as const

export const PARTICIPANT_NAME = {
  host: 'text-primary-600 font-semibold text-xs',
  default: 'text-custom-gray-700 text-xs',
} as const
