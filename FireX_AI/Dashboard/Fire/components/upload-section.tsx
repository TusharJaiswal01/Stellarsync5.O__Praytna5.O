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
  const [analysisResult, setAnalysisResult] = useState<string>("")
  const [processedURL, setProcessedURL] = useState<string | null>(null)
  const [detectedObjects, setDetectedObjects] = useState<string[]>([])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    accept: {
      "image/*": [".jpeg", ".jpg", ".png"],
      "video/*": [".mp4", ".mov"],
    },
    onDrop: (acceptedFiles) => {
      setFiles(acceptedFiles)
      handleUpload(acceptedFiles[0])
    },
  })

  const handleUpload = async (file: File) => {
    setUploading(true)
    setProgress(0)
    const formData = new FormData()
    formData.append("file", file)

    try {
      const response = await fetch("http://localhost:5000/getvideo", {
        method: "POST",
        body: formData,
      })
      const data = await response.json()

    //   data = {
    //     "filename": "videoplayback1.mp4",
    //     "message": "File uploaded",
    //     "process_url": "/process/videoplayback1.mp4"
    // }

      if (!response.ok) throw new Error(data.error || "Upload failed")

      setProgress(100)
      setUploading(false)
      handleProcessing(data.filename)
    } catch (error) {
      console.error("Upload error:", error)
      setUploading(false)
    }
  }

  const handleProcessing = async (filename: string) => {
    setAnalyzing(true)

    try {
      const response = await fetch(`http://localhost:5000/process/${filename}`)
      const data = await response.json()

      if (!response.ok) throw new Error(data.error || "Processing failed")


    //   data = {
    //     "detected_objects": [
    //         "fire_alarm",
    //         "fire_extinguisher"
    //     ],
    //     "message": "Processing complete",
    //     "output_url": "http://localhost:5000/output/processed_gadget2.mp4"
    // }
    //      Dont know why output_url is bugged and not working

      setProcessedURL(data.output_url)
      setDetectedObjects(data.detected_objects)
      setAnalysisResult(`Detected objects: ${data.detected_objects.join(", ")}`)
    } catch (error) {
      console.error("Processing error:", error)
      setAnalysisResult("No hazards detected")
    }

    setAnalyzing(false)
    setAnalyzed(true)
  }

  const resetUpload = () => {
    setFiles([])
    setProgress(0)
    setUploading(false)
    setAnalyzing(false)
    setAnalyzed(false)
    setAnalysisResult("")
    setProcessedURL(null)
    setDetectedObjects([])
  }

  console.log(processedURL)

  return (
    <div className="space-y-4">
      {!files.length ? (
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-all ${isDragActive ? "border-blue-500 bg-blue-500/10" : "border-white/20 hover:border-white/40 hover:bg-white/5"
            }`}
        >
          <input {...getInputProps()} />
          <div className="flex flex-col items-center space-y-3">
            <Upload className="h-6 w-6 text-blue-400" />
            <p className="text-sm font-medium">{isDragActive ? "Drop files here" : "Drag & drop files here"}</p>
            <p className="text-xs text-white/60">Support for images and videos up to 50MB</p>
            <Button variant="outline" size="sm" className="mt-2 border-white/20">Browse Files</Button>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <motion.div className="relative border border-white/10 rounded-lg p-4 bg-white/5">
            <div className="flex items-start gap-3">
              <FileImage className="h-6 w-6 text-blue-400" />
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate">{files[0].name}</p>
                <p className="text-xs text-white/60">{(files[0].size / (1024 * 1024)).toFixed(2)} MB</p>
                {uploading && <Progress value={progress} className="h-1 bg-white/10" />}
                {analyzing && <p className="text-xs text-orange-400">AI analyzing image...</p>}
                {analyzed && (
                  <div className="mt-2 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <p className="text-xs text-green-400">
                      Detected objects:{" "}
                      {detectedObjects.map((obj, index) => {
                        const formattedObj = obj
                          .replace(/_/g, " ") // Replace underscores with spaces
                          .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter of each word
                        return (
                          <span key={index} className="font-semibold">
                            {formattedObj}
                            {index !== detectedObjects.length - 1 && ","}{" "}
                          </span>
                        );
                      })}
                    </p>
                  </div>



                )}
              </div>
              <Button variant="ghost" size="icon" className="h-6 w-6" onClick={resetUpload}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
          {/* {analyzed && (
            <div className="space-y-4">
              {processedURL && (
                <video className="rounded-lg w-full" controls>
                  <source src={processedURL} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              <Button className="w-full bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600">
                Generate Report
              </Button>
            </div>
          )} */}
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
