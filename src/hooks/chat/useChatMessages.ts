import { useQuery } from '@tanstack/react-query'
import { fetchChatMessages } from '@/api'

export function useChatMessages(groupId: number | string | null) {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: ['chatMessages', groupId],
    queryFn: () =>
      fetchChatMessages(groupId as number | string, { page_size: 50 }),
    enabled: !!groupId,
    staleTime: 5000,
  })

  return {
    messages: data?.results || [],
    nextCursor: data?.next ?? null,
    isLoading,
    isError,
    error,
    refetch,
  }
}
