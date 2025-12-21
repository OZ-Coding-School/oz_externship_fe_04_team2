import { Upload, X } from 'lucide-react'
import { Button, BaseUploader } from '@/components/common'
import { FilePreview } from '@/components/studygroup-detail'
import { showToast } from '@/lib'
import type { FileUploadItemType } from '@/types'
import type { FileRejection } from 'react-dropzone'

interface FileUploaderProps {
  value: FileUploadItemType[]
  onChange: (files: FileUploadItemType[]) => void
}

export function FileUploader({ value, onChange }: FileUploaderProps) {
  const onDrop = (incoming: File[]) => {
    const mapped: FileUploadItemType[] = incoming.map((file) => ({
      file,
      preview_url: URL.createObjectURL(file),
      type: file.type,
      file_name: file.name,
    }))
    onChange([...value, ...mapped])
  }

  const onDropRejected = (rejections: FileRejection[]) => {
    const oversizedFiles = rejections.filter((rejection) =>
      rejection.errors.some((e) => e.code === 'file-too-large')
    )

    if (oversizedFiles.length > 0) {
      const names = oversizedFiles
        .map((rejection) => rejection.file.name)
        .join(', ')
      showToast.warning('파일 크기 초과', `${names} 파일이 10MB를 초과합니다.`)
    }
  }

  const removeFile = (file: FileUploadItemType) => {
    URL.revokeObjectURL(file.preview_url)
    onChange(value.filter((f) => f.preview_url !== file.preview_url))
  }

  return (
    <BaseUploader
      maxSize={10 * 1024 * 1024}
      multiple
      onDrop={onDrop}
      onDropRejected={onDropRejected}
    >
      {value.length > 0 ? (
        <div className="grid w-full auto-rows-auto grid-cols-3 gap-2">
          {value.map((file) => (
            <div
              key={file.preview_url}
              className="relative w-full overflow-hidden rounded-lg bg-white"
            >
              <FilePreview
                url={file.preview_url}
                type={file.type}
                name={file.file_name}
              />
              <Button
                variant="ghost"
                className="text-custom-gray-400 absolute top-2 right-2"
                onClick={(e) => {
                  e.stopPropagation()
                  removeFile(file)
                }}
              >
                <X size={16} />
              </Button>
            </div>
          ))}
        </div>
      ) : (
        <div className="centralize flex-col gap-1 text-center">
          <Upload size={36} className="text-custom-gray-400" />
          <p className="text-custom-gray-600 text-sm">
            파일을 여기에 드래그하거나{' '}
            <span className="text-primary-600 font-medium">클릭하여 선택</span>
          </p>
          <p className="text-custom-gray-400 text-xs">
            모든 파일 형식 지원 (최대 10MB)
          </p>
        </div>
      )}
    </BaseUploader>
  )
}
