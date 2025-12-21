import { axiosInstance } from '@/api/axios'
import { API_PATHS } from '@/constants'
import {
  type DeleteS3FileResponseType,
  type PresignedUrlParamsType,
  type PresignedUrlResponseType,
} from '@/types/s3'
import axios from 'axios'

// Presigned URL 발급
export const getPresignedUrl = async (params: PresignedUrlParamsType) => {
  const { data } = await axiosInstance.get<PresignedUrlResponseType>(
    API_PATHS.S3.PRESIGNED_URL,
    { params }
  )
  return data
}

// S3에 파일 업로드
export const uploadToS3 = async (
  uploadUrl: string,
  file: File,
  headers: { 'Content-Type': string }
) => {
  await axios.put(uploadUrl, file, { headers })
}

// S3 파일 삭제
export const deleteS3File = async (key: string) => {
  const { data } = await axiosInstance.delete<DeleteS3FileResponseType>(
    API_PATHS.S3.DELETE_FILE,
    {
      params: { key },
    }
  )
  return data
}
