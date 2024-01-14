import React, { Dispatch, SetStateAction } from 'react'

type FileUploadProps = {
    frontUrl: string,
    onFieldChange: (value: string) => void
    setFiles: Dispatch<SetStateAction<File[]>>
}

const FileUploader = ({frontUrl, onFieldChange, setFiles}: FileUploadProps) => {
  return (
    <div>FileUploader</div>
  )
}

export default FileUploader