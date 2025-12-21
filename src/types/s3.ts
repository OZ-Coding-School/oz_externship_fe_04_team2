export type PresignedUrlType =
  | 'USER_PROFILE_IMAGE'
  | 'STUDY_GROUP_IMAGE'
  | 'RECRUITMENT_IMAGE'
  | 'NOTE_IMAGE'
  | 'NOTE_ATTACHMENT'
  | 'RECRUITMENT_ATTACHMENT'

export interface PresignedUrlParamsType {
  type: PresignedUrlType
  content_type: string
  file_name: string
  file_ext: string
}

export interface PresignedUrlResponseType {
  upload_url: string
  file_url: string
  key: string
  headers: {
    'Content-Type': string
  }
}

export interface DeleteS3FileResponseType {
  message: string
  key: string
}

export type FileUploadItemType = {
  file_name: string
  preview_url: string
  type: string
  file?: File
  s3_url?: string
  error?: string
}
