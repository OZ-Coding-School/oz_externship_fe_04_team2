import { getPresignedUrl, uploadToS3 } from '@/api'
import type { FileUploadItemType } from '@/types'

export default function useFileUpload() {
  // 단일 파일 업로드
  const uploadFile = async (
    item: FileUploadItemType
  ): Promise<FileUploadItemType> => {
    if (item.s3_url) return item

    const fileExt = item.file_name.split('.').pop() ?? ''

    try {
      const { upload_url, file_url, headers } = await getPresignedUrl({
        type: 'NOTE_ATTACHMENT',
        content_type: item.type,
        file_name: item.file_name,
        file_ext: fileExt,
      })

      await uploadToS3(upload_url, item.file!, headers)

      return {
        ...item,
        s3_url: file_url,
        error: '',
      }
    } catch (error) {
      console.error('uploadFile', error)
      return {
        ...item,
        error: '파일 업로드 중 오류가 발생했습니다.',
      }
    }
  }

  // 여러 파일 업로드
  const uploadFiles = async (
    items: FileUploadItemType[]
  ): Promise<FileUploadItemType[]> => {
    if (!items.length) return []
    return Promise.all(items.map(uploadFile))
  }

  return { uploadFile, uploadFiles }
}
