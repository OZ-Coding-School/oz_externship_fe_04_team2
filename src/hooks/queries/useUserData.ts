import { getUserInformationApi } from '@/api'
import type { UserInformation } from '@/types'
import { useQuery } from '@tanstack/react-query'

export const useUserData = () => {
  return useQuery<UserInformation[]>({
    queryKey: ['userData'],
    queryFn: getUserInformationApi,
    initialData: [],
  })
}
