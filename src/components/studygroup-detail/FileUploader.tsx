import { Upload, X } from 'lucide-react'
import { useState } from 'react'
import { Button, BaseUploader } from '@/components/common'
import { FilePreview } from '@/components/studygroup-detail'

type UploadedFile = {
  url: string
  type: string
  name: string
}

export function FileUploader() {
  const [files, setFiles] = useState<UploadedFile[]>([])

  const onDrop = (incoming: File[]) => {
    const mapped = incoming.map((file) => ({
      url: URL.createObjectURL(file),
      type: file.type,
      name: file.name,
    }))

    setFiles((prev) => [...prev, ...mapped])
  }

  const removeFile = (file: UploadedFile) => {
    URL.revokeObjectURL(file.url)

    setFiles((prev) => prev.filter((f) => f.url !== file.url))
  }

  return (
    <BaseUploader
      // accept={{ '*/*': [] }}
      maxSize={10 * 1024 * 1024}
      multiple
      onDrop={onDrop}
    >
      {files.length > 0 ? (
        <div className="grid w-full auto-rows-auto grid-cols-3 gap-2">
          {files.map((file) => (
            <div
              key={file.url}
              className="relative w-full overflow-hidden rounded-lg bg-white"
            >
              <FilePreview url={file.url} type={file.type} name={file.name} />
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
