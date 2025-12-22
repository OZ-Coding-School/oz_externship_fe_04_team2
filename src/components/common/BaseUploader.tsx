import { useCallback } from 'react'
import { type Accept, type FileRejection, useDropzone } from 'react-dropzone'

interface BaseUploaderProps {
  accept?: Accept
  maxSize?: number
  multiple?: boolean
  onDrop: (files: File[]) => void
  onDropRejected?: (rejections: FileRejection[]) => void
  children?: React.ReactNode
}

export function BaseUploader({
  accept,
  maxSize = 5 * 1024 * 1024,
  multiple = false,
  onDrop,
  onDropRejected,
  children,
}: BaseUploaderProps) {
  const handleDrop = useCallback(
    (accepted: File[], rejected: FileRejection[]) => {
      if (rejected.length > 0 && onDropRejected) {
        onDropRejected(rejected)
      }
      onDrop(accepted)
    },
    [onDrop, onDropRejected]
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept,
    maxSize,
    multiple,
    onDrop: handleDrop,
  })

  return (
    <div
      {...getRootProps()}
      className={`centralize relative w-full cursor-pointer flex-col rounded-lg border-2 border-dashed p-6 ${isDragActive ? 'border-primary-500 bg-primary-50' : 'hover:bg-custom-gray-50 border-custom-gray-300 bg-white'} `}
    >
      <input {...getInputProps()} />
      {children}
    </div>
  )
}
