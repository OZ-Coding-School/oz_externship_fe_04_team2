import { PARTICIPANT_NAME, STATUS_INDICATOR } from '@/constants'
import type { ChatParticipant } from '@/types'

interface ChatParticipantsProps {
  members: ChatParticipant[]
}

export function ChatParticipants({ members }: ChatParticipantsProps) {
  const participants = members
  return (
    <div className="border-custom-gray-200 scrollbar-hide h-auto min-h-fit w-full overflow-x-scroll border-b">
      <ul className="bg-custom-gray-50 flex w-full gap-2 p-2 pb-[7px]">
        {participants.map((member) => (
          <li
            key={member.id}
            className="bg-custom-gray-50 flex items-center gap-1 rounded-full px-2 py-1 shadow-xs"
          >
            <span
              className={
                member.is_online
                  ? STATUS_INDICATOR.online
                  : STATUS_INDICATOR.offline
              }
            />
            <span
              className={
                member.is_host
                  ? PARTICIPANT_NAME.host
                  : PARTICIPANT_NAME.default
              }
            >
              {member.nickname}
            </span>
          </li>
        ))}
      </ul>
    </div>
  )
}
