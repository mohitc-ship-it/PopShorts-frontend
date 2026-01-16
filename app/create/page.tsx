"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Upload, Link2 } from "lucide-react"
import { useRouter } from "next/navigation"

export default function CreatePage() {
  const router = useRouter()
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [videoFile, setVideoFile] = useState<File | null>(null)
  const [videoSource, setVideoSource] = useState<"file" | "youtube">("file")
  const [numberOfShorts, setNumberOfShorts] = useState(5)
  const [autoPublish, setAutoPublish] = useState(false)
  const [manualReview, setManualReview] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [videoPath, setVideoPath] = useState("")
  const [youtubeUrl, setYoutubeUrl] = useState("")

  const handleGenerate = async () => {
    if (videoSource === "file" && !videoFile) {
      alert("Please upload a video file")
      return
    }

    if (videoSource === "youtube" && !youtubeUrl) {
      alert("Please provide a YouTube URL")
      return
    }

    setIsLoading(true)
    try {
      const formData = new FormData()

      if (videoSource === "file" && videoFile) {
        formData.append("video", videoFile)
      } else if (videoSource === "youtube") {
        // Note: Backend currently expects 'video' file. 
        // If supporting YouTube URL, backend needs update. 
        // Sending as 'youtube_url' for potential future support or middleware handling.
        formData.append("youtube_url", youtubeUrl)
      }

      formData.append("number_of_shorts", numberOfShorts.toString())
      formData.append("auto_upload", autoPublish.toString())
      formData.append("mode", "sequential") // Hardcoded based on backend requirement

      const response = await fetch("/api/process-video", {
        method: "POST",
        // Content-Type header is skipped so browser sets generic multipart/form-data with boundary
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        // Pass shorts data to results page via URL state
        router.push(`/results?shorts=${encodeURIComponent(JSON.stringify(data.shorts))}&autoUpload=${autoPublish}`)
      } else {
        alert(data.error || "Failed to generate shorts")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("An error occurred while generating shorts")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="px-6 py-6 border-b border-border">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold text-foreground mb-2">Create Shorts</h1>
          <p className="text-muted-foreground">Upload your video and let AI do the magic</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-12">
        <div className="max-w-2xl mx-auto space-y-8">
          {/* Video Upload Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-foreground">Upload Your Video</h2>
            <div className="space-y-4">
              {/* File Upload */}
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${videoSource === "file" ? "border-primary bg-primary/5" : "border-border hover:border-muted-foreground"
                  }`}
                onClick={() => {
                  setVideoSource("file")
                  fileInputRef.current?.click()
                }}
              >
                <Upload className="w-12 h-12 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold text-foreground mb-1">Upload Video File</h3>
                <p className="text-sm text-muted-foreground">
                  {videoPath ? `Selected: ${videoPath}` : "Drag and drop or click to select"}
                </p>
                <input
                  ref={fileInputRef}
                  type="file"
                  className="hidden"
                  accept="video/*"
                  onChange={(e) => {
                    const file = e.target.files?.[0]
                    if (file) {
                      setVideoPath(file.name)
                      setVideoFile(file)
                    }
                  }}
                />
              </div>

              {/* YouTube Link */}
              {/* <div
                className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors ${videoSource === "youtube"
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-muted-foreground"
                  }`}
                onClick={() => setVideoSource("youtube")}
              >
                <Link2 className="w-12 h-12 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold text-foreground mb-1">Paste YouTube Link</h3>
                <p className="text-sm text-muted-foreground">Add your YouTube podcast or video URL</p>
              </div> */}

              {videoSource === "youtube" && (
                <Input
                  placeholder="Paste your YouTube URL here..."
                  className="border-border"
                  value={youtubeUrl}
                  onChange={(e) => setYoutubeUrl(e.target.value)}
                />
              )}
            </div>
          </div>

          {/* Shorts Settings */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-foreground">Shorts Settings</h2>
            <Card className="bg-card border-border p-6">
              {/* Number of Shorts */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-3">
                  <label className="font-medium text-foreground">How many Shorts should PopShorts create?</label>
                  <span className="text-lg font-semibold text-primary">{numberOfShorts}</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={numberOfShorts}
                  onChange={(e) => setNumberOfShorts(Number.parseInt(e.target.value))}
                  className="w-full cursor-pointer accent-primary"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>1</span>
                  <span>20</span>
                </div>
              </div>

              {/* Upload Mode */}
              <div className="border-t border-border pt-6">
                <h3 className="font-medium text-foreground mb-4">Upload Mode</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="auto-publish"
                      checked={autoPublish}
                      onCheckedChange={(checked) => {
                        setAutoPublish(checked as boolean)
                        if (checked) setManualReview(false)
                      }}
                      className="mt-1 border-border"
                    />
                    <div className="flex-1">
                      <label htmlFor="auto-publish" className="font-medium text-foreground cursor-pointer">
                        Auto-Publish to YouTube
                      </label>
                      <p className="text-sm text-muted-foreground mt-1">
                        Let PopShorts automatically upload all generated Shorts
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Checkbox
                      id="manual-review"
                      checked={manualReview}
                      onCheckedChange={(checked) => {
                        setManualReview(checked as boolean)
                        if (checked) setAutoPublish(false)
                      }}
                      className="mt-1 border-border"
                    />
                    <div className="flex-1">
                      <label htmlFor="manual-review" className="font-medium text-foreground cursor-pointer">
                        Manual Review
                      </label>
                      <p className="text-sm text-muted-foreground mt-1">
                        I want to review and choose which Shorts to publish
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Generate Button */}
          <div>
            <Button
              onClick={handleGenerate}
              disabled={isLoading}
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-6 text-lg font-semibold disabled:opacity-50"
            >
              {isLoading ? "Generating Shorts..." : "Generate My Shorts"}
            </Button>
            <p className="text-xs text-muted-foreground text-center mt-3">
              PopShorts will analyze your video, create clips, add subtitles, and prepare them for YouTube.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
