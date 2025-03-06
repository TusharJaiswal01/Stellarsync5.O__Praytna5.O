"use client"

import { useState } from "react"
import { useDropzone } from "react-dropzone"
import { motion } from "framer-motion"
import { AlertCircle, CheckCircle, FileImage, Upload, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export function UploadSection() {
  const [files, setFiles] = useState<File[]>([])
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [analyzing, setAnalyzing] = useState(false)
  const [analyzed, setAnalyzed] = useState(false)

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [".jpeg", ".jpg", ".png"],
      "video/*": [".mp4", ".mov"],
    },
    onDrop: (acceptedFiles) => {
      setFiles(acceptedFiles)
      handleUpload(acceptedFiles)
    },
  })

  const handleUpload = (files: File[]) => {
    setUploading(true)
    setProgress(0)

    // Simulate upload progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setUploading(false)
          simulateAnalysis()
          return 100
        }
        return prev + 5
      })
    }, 100)
  }

  const simulateAnalysis = () => {
    setAnalyzing(true)
    setTimeout(() => {
      setAnalyzing(false)
      setAnalyzed(true)
    }, 2000)
  }

  const resetUpload = () => {
    setFiles([])
    setProgress(0)
    setUploading(false)
    setAnalyzing(false)
    setAnalyzed(false)
  }

  return (
    <div className="space-y-4">
      {!files.length ? (
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all ${
            isDragActive ? "border-blue-500 bg-blue-500/10" : "border-white/20 hover:border-white/40 hover:bg-white/5"
          }`}
        >
          <input {...getInputProps()} />
          <div className="flex flex-col items-center justify-center space-y-3">
            <div className="p-3 rounded-full bg-white/5">
              <Upload className="h-6 w-6 text-blue-400" />
            </div>
            <div>
              <p className="text-sm font-medium">{isDragActive ? "Drop files here" : "Drag & drop files here"}</p>
              <p className="text-xs text-white/60 mt-1">Support for images and videos up to 50MB</p>
            </div>
            <Button variant="outline" size="sm" className="mt-2 border-white/20">
              Browse Files
            </Button>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="relative border border-white/10 rounded-lg p-4 bg-white/5">
            <div className="flex items-start gap-3">
              <div className="h-12 w-12 rounded bg-black/40 flex items-center justify-center">
                <FileImage className="h-6 w-6 text-blue-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate">{files[0].name}</p>
                <p className="text-xs text-white/60">{(files[0].size / (1024 * 1024)).toFixed(2)} MB</p>

                {uploading && (
                  <div className="mt-2">
                    <Progress value={progress} className="h-1 bg-white/10" />
                    <p className="text-xs text-white/60 mt-1">Uploading... {progress}%</p>
                  </div>
                )}

                {analyzing && (
                  <div className="mt-2 flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
                    <p className="text-xs text-orange-400">AI analyzing image...</p>
                  </div>
                )}

                {analyzed && (
                  <div className="mt-2 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <p className="text-xs text-green-400">Analysis complete - 2 potential hazards detected</p>
                  </div>
                )}
              </div>

              <Button variant="ghost" size="icon" className="h-6 w-6" onClick={resetUpload}>
                <X className="h-4 w-4" />
              </Button>
            </div>

            {analyzed && (
              <motion.div
                className="mt-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex items-start gap-2">
                  <AlertCircle className="h-5 w-5 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-red-400">Fire Hazards Detected</p>
                    <ul className="mt-1 text-xs space-y-1 text-white/80">
                      <li>• Blocked emergency exit (west corridor)</li>
                      <li>• Outdated fire extinguisher (needs replacement)</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {analyzed && (
            <div className="flex gap-2">
              <Button className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600">
                Generate Report
              </Button>
              <Button variant="outline" className="border-white/10 hover:bg-white/5">
                Upload More
              </Button>
            </div>
          )}
        </div>
      )}

      <div className="text-xs text-white/60 pt-2">
        <p>AI-powered analysis will automatically detect:</p>
        <ul className="mt-1 space-y-1">
          <li>• Blocked fire exits and escape routes</li>
          <li>• Outdated or missing fire safety equipment</li>
          <li>• Electrical hazards and fire risks</li>
        </ul>
      </div>
    </div>
  )
}

