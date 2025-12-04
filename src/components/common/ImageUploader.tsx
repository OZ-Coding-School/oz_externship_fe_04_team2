import { ImagePlus, X } from 'lucide-react'
import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { Button } from './Button'

export function ImageUploader() {
  const [preview, setPreview] = useState<string | null>(null)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0]

    if (file) {
      const objectUrl: string = URL.createObjectURL(file)
      setPreview(objectUrl)
    }
  }, [])

  const removeImage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    if (preview) {
      URL.revokeObjectURL(preview)
    }
    setPreview(null)
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': ['.jpeg', '.jpg'],
      'image/png': ['.png'],
    },
    maxSize: 5 * 1024 * 1024,
    multiple: false,
  })

  return (
    <div className="mx-auto w-full">
      <div
        {...getRootProps()}
        className={`centralize relative h-32 w-full cursor-pointer flex-col rounded-lg border-2 border-dashed ${
          isDragActive
            ? 'border-primary-500 bg-primary-50'
            : 'hover:bg-custom-gray-50 border-custom-gray-300 bg-white'
        } ${preview ? 'overflow-hidden border-none p-0' : ''} `}
      >
        <input {...getInputProps()} />
        {preview ? (
          <div className="relative h-full w-full">
            <img
              src={preview}
              alt="Preview"
              className="bg-custom-gray-50 h-full w-full rounded-lg object-contain"
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
            <ImagePlus
              size={36}
              strokeWidth={2}
              className="text-custom-gray-400"
            />
            <div>
              <p className="text-custom-gray-600 text-sm">
                클릭하여 이미지 업로드
              </p>
              <p className="text-custom-gray-400 text-xs">
                JPG, PNG (최대 5MB)
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
