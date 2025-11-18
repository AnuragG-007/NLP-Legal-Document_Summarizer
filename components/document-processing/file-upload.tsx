'use client'

import { useState, useRef } from 'react'
import { Upload, X } from 'lucide-react'

interface FileUploadProps {
  uploadedFile: File | null
  onFileSelect: (file: File | null) => void
  acceptedFormats: string[]
}

export default function FileUpload({ uploadedFile, onFileSelect, acceptedFormats }: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const files = e.dataTransfer.files
    if (files.length > 0) {
      onFileSelect(files[0])
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files
    if (files && files.length > 0) {
      onFileSelect(files[0])
    }
  }

  const handleRemove = () => {
    onFileSelect(null)
    if (inputRef.current) {
      inputRef.current.value = ''
    }
  }

  return (
    <div className="space-y-3">
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => inputRef.current?.click()}
        className={`relative p-8 border-2 border-dashed rounded-lg cursor-pointer transition-all ${
          isDragging
            ? 'border-primary bg-primary/5'
            : 'border-border hover:border-primary/50'
        }`}
      >
        <input
          ref={inputRef}
          type="file"
          onChange={handleFileChange}
          accept={acceptedFormats.join(',')}
          className="hidden"
        />

        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <Upload className="w-6 h-6 text-muted-foreground" />
          <div>
            <p className="text-sm font-medium text-foreground">
              Click to upload or drag and drop
            </p>
            <p className="text-xs text-muted-foreground">
              {acceptedFormats.map(f => f.toUpperCase()).join(', ')}
            </p>
          </div>
        </div>
      </div>

      {/* File Preview */}
      {uploadedFile && (
        <div className="flex items-center justify-between p-4 bg-card border border-border rounded-lg">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Upload className="w-5 h-5 text-primary" />
            </div>
            <div className="text-left">
              <p className="text-sm font-medium text-foreground truncate max-w-xs">
                {uploadedFile.name}
              </p>
              <p className="text-xs text-muted-foreground">
                {(uploadedFile.size / 1024).toFixed(2)} KB
              </p>
            </div>
          </div>
          <button
            onClick={handleRemove}
            className="p-1 hover:bg-accent rounded transition-colors"
            aria-label="Remove file"
          >
            <X className="w-5 h-5 text-muted-foreground hover:text-foreground" />
          </button>
        </div>
      )}
    </div>
  )
}
