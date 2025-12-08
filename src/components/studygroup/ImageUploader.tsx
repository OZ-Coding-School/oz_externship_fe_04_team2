import { ImagePlus, X } from 'lucide-react'
import { useState } from 'react'
import { Button, BaseUploader } from '@/components/common'

export function ImageUploader() {
  const [preview, setPreview] = useState<string | null>(null)

  const onDrop = (files: File[]) => {
    const file = files[0]
    if (!file) return

    const url = URL.createObjectURL(file)
    setPreview(url)
  }

  const removeImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    if (preview) URL.revokeObjectURL(preview)
    setPreview(null)
  }

  return (
    <BaseUploader
      accept={{
        'image/jpeg': ['.jpeg', '.jpg'],
        'image/png': ['.png'],
        'image/webp': ['.webp'],
      }}
      maxSize={5 * 1024 * 1024}
      multiple={false}
      onDrop={onDrop}
    >
      {preview ? (
        <div className="relative h-full w-full overflow-hidden rounded-lg">
          <img
            src={preview}
            alt="Preview"
            className="bg-custom-gray-50 h-32 w-full object-contain"
          />
          <Button
            variant="ghost"
            className="text-custom-gray-400 absolute top-2 right-2"
            onClick={removeImage}
          >
            <X size={16} />
          </Button>
        </div>
      ) : (
        <div className="centralize flex-col gap-1 text-center">
          <ImagePlus size={36} className="text-custom-gray-400" />
          <p className="text-custom-gray-600 text-sm">클릭하여 이미지 업로드</p>
          <p className="text-custom-gray-400 text-xs">JPG, PNG (최대 5MB)</p>
        </div>
      )}
    </BaseUploader>
  )
}
