import { ArrowDownToLine, FolderArchive } from 'lucide-react'

interface StudyNoteAttachmentItemProps {
  file: {
    id: number
    file_name: string
    file_url: string
  }
}

export function StudyNoteAttachmentItem({
  file,
}: StudyNoteAttachmentItemProps) {
  return (
    <li>
      <a
        href={file.file_url}
        target="_blank"
        rel="noopener noreferrer"
        className="border-custom-gray-200 hover:bg-custom-gray-50 flex cursor-pointer items-center gap-3 rounded-lg border p-3 py-2 transition-colors duration-200"
      >
        <FolderArchive className="text-custom-gray-500 h-4 w-4" />

        <p className="flex flex-1 flex-col">
          <span className="text-custom-gray-900 text-sm font-medium">
            {file.file_name}
          </span>
          <span className="text-custom-gray-500 text-sm">다운로드 가능</span>
        </p>

        <ArrowDownToLine className="text-custom-gray-500 h-4 w-4" />
      </a>
    </li>
  )
}
