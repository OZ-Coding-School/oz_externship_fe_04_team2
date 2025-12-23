import { getPresignedUrl, uploadToS3 } from '@/api'

interface UploadImageResult {
  imageUrl?: string
  error?: string
}

export function useImageUpload() {
  const uploadImage = async (file: File): Promise<UploadImageResult> => {
    const fileExt = file.name.split('.').pop() ?? ''

    try {
      const { upload_url, file_url, headers } = await getPresignedUrl({
        type: 'NOTE_IMAGE', // ← 용도에 맞게
        content_type: file.type,
        file_name: file.name,
        file_ext: fileExt,
      })

      await uploadToS3(upload_url, file, headers)

      return { imageUrl: file_url }
    } catch (error) {
      console.error('uploadImage', error)
      return { error: '이미지 업로드에 실패했습니다.' }
    }
  }

  return { uploadImage }
}
