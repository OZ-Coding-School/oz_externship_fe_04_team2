import { fetchChatRooms } from '@/api/chat'
import { useChatStore } from '@/store/useChatStore'
import { useQuery } from '@tanstack/react-query'

export function useChatRooms() {
  const isOpen = useChatStore((state) => state.isOpen)

  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['chatRooms'],
    queryFn: () => fetchChatRooms({ page_size: 10 }),
    enabled: isOpen,
    refetchInterval: isOpen ? 30000 : false,
    staleTime: 10000,
  })

  return {
    chatRooms: data?.results || [],
    isLoading,
    isError,
    error,
    refetch,
  }
}
