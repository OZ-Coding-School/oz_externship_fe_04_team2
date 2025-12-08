import { FileIcon, Music, FileText, FolderArchive } from 'lucide-react'

interface FilePreviewProps {
  url: string
  type: string
  name: string
}

export function FilePreview({ url, type, name }: FilePreviewProps) {
  const FileName = (
    <p className="text-custom-gray-600 mt-1 w-full truncate px-2 text-center text-xs">
      {name}
    </p>
  )

  if (type.startsWith('image/')) {
    return (
      <div>
        <img
          src={url}
          alt="preview"
          className="bg-custom-gray-50 aspect-video h-32 w-full object-contain"
        />
      </div>
    )
  }

  if (type.startsWith('video/')) {
    return (
      <div>
        <video
          src={url}
          controls
          className="h-32 w-full bg-black object-contain"
        />
      </div>
    )
  }

  if (type.startsWith('audio/')) {
    return (
      <div className="centralize bg-custom-gray-50 h-32 w-full flex-col gap-2">
        <Music size={32} />
        <audio controls src={url} className="w-full px-2" />
        {FileName}
      </div>
    )
  }

  if (type === 'application/pdf') {
    return (
      <div className="centralize h-32 w-full flex-col gap-1 bg-red-50 text-red-600">
        <FileText size={32} />
        {FileName}
      </div>
    )
  }

  if (
    type.includes('zip') ||
    type.includes('rar') ||
    type.includes('x-7z-compressed')
  ) {
    return (
      <div className="centralize h-32 w-full flex-col gap-1 bg-amber-50 text-amber-700">
        <FolderArchive size={32} />
        {FileName}
      </div>
    )
  }

  return (
    <div className="centralize bg-custom-gray-100 text-custom-gray-600 h-32 w-full flex-col gap-1">
      <FileIcon size={32} />
      {FileName}
    </div>
  )
}
