import { createStudyGroup } from '@/api'
import { ApiError } from '@/utils'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'

export function useCreateStudyGroup() {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  return useMutation({
    mutationFn: createStudyGroup,

    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ['studyGroups'],
      })

      toast.success('스터디 그룹이 생성되었습니다')
      navigate(`/${data.id}`)
    },

    onError: (error) => {
      if (error instanceof ApiError) {
        toast.error(error.message)
      } else {
        toast.error('스터디 생성에 실패했습니다')
      }
    },
  })
}
