"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download, Upload, Share2 } from "lucide-react"
import { useSearchParams } from "next/navigation"

interface Short {
  quote: string
  virality_score: number
  content_category: string
  reason: string
  topic: string
  start_time: number
  end_time: number
  trimmed_path: string
  subtitleAddedVideo: string
  title: string
  description: string
  tags: string
  url?: string
}

export default function ResultsContent() {
  const [shorts, setShorts] = useState<Short[]>([])
  const [selectedShorts, setSelectedShorts] = useState<number[]>([])
  const [autoUpload, setAutoUpload] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [playingShortIndex, setPlayingShortIndex] = useState<number | null>(null)
  const searchParams = useSearchParams()

  useEffect(() => {
    const shortsParam = searchParams.get("shorts")
    const autoUploadParam = searchParams.get("autoUpload")

    if (shortsParam) {
      const parsedShorts = JSON.parse(decodeURIComponent(shortsParam))
      setShorts(parsedShorts)
      setAutoUpload(autoUploadParam === "true")

      if (autoUploadParam === "true") {
        handleAutoUpload(parsedShorts)
      } else {
        setSelectedShorts(parsedShorts.map((_, i) => i))
      }
    }
  }, [searchParams])

  const handleAutoUpload = async (shortsToUpload: Short[]) => {
    setIsUploading(true)
    try {
      for (let i = 0; i < shortsToUpload.length; i++) {
        const short = shortsToUpload[i]
        await fetch("/api/upload-video", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            shortId: i,
            videoPath: short.subtitleAddedVideo,
            title: short.title,
            description: short.description,
            tags: short.tags,
          }),
        })
      }

      const updatedShorts = await Promise.all(
        shortsToUpload.map(async (short, i) => {
          const response = await fetch("/api/upload-video", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              shortId: i,
              videoPath: short.subtitleAddedVideo,
              title: short.title,
              description: short.description,
              tags: short.tags,
            }),
          })
          const data = await response.json()
          return { ...short, url: data.url }
        }),
      )

      setShorts(updatedShorts)
    } catch (error) {
      console.error("Upload error:", error)
    } finally {
      setIsUploading(false)
    }
  }

  const handleUploadSelected = async () => {
    setIsUploading(true)
    try {
      const updatedShorts = await Promise.all(
        shorts.map(async (short, i) => {
          if (selectedShorts.includes(i)) {
            const response = await fetch("/api/upload-video", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                shortId: i,
                videoPath: short.subtitleAddedVideo,
                title: short.title,
                description: short.description,
                tags: short.tags,
              }),
            })
            const data = await response.json()
            return { ...short, url: data.url }
          }
          return short
        }),
      )

      setShorts(updatedShorts)
      alert("Selected shorts uploaded successfully!")
    } catch (error) {
      console.error("Upload error:", error)
      alert("Failed to upload shorts")
    } finally {
      setIsUploading(false)
    }
  }

  const toggleShort = (index: number) => {
    setSelectedShorts((prev) => (prev.includes(index) ? prev.filter((x) => x !== index) : [...prev, index]))
  }

  const getEngagementColor = (score: number) => {
    if (score >= 9) return "text-primary"
    if (score >= 7) return "text-foreground"
    return "text-muted-foreground"
  }

  const getVideoUrl = (short: Short) => {
    // If it's a full URL (like S3 or remote storage), use it directly

    if (short.url && short.url.startsWith("http")) {
      return short.url
    }
    if (short.subtitleAddedVideo.startsWith("http")) {
      return short.subtitleAddedVideo
    }
    // Otherwise construct local backend URL
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8000"
    // Ensure we don't double slash if path already has leading slash
    const path = short.subtitleAddedVideo.startsWith("/")
      ? short.subtitleAddedVideo
      : `/${short.subtitleAddedVideo}`
    return `${backendUrl}${path}`
  }

  return (
    <>
      {/* Header */}
      <div className="px-6 py-6 border-b border-border">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-foreground mb-1">Your Generated Shorts</h1>
            <p className="text-muted-foreground">
              {shorts.length} high-performing clips ready to publish
              {autoUpload && " (Auto-uploading...)"}
            </p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Button variant="outline" className="border-border hover:bg-muted bg-transparent">
              <Download className="w-4 h-4 mr-2" />
              Download All
            </Button>
            {!autoUpload && (
              <Button
                onClick={handleUploadSelected}
                disabled={selectedShorts.length === 0 || isUploading}
                className="bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
              >
                <Upload className="w-4 h-4 mr-2" />
                {isUploading ? "Uploading..." : `Upload ${selectedShorts.length} Selected`}
              </Button>
            )}
          </div>
        </div>
      </div>

      {/* Grid of Shorts */}
      <div className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shorts.map((short, index) => (
              <Card
                key={index}
                className="bg-card border-border overflow-hidden hover:shadow-lg transition-shadow bg-card"
              >
                {/* Video Preview */}
                <div
                  className="relative aspect-video bg-muted overflow-hidden cursor-pointer group"
                  onClick={() => toggleShort(index)}
                >
                  {playingShortIndex === index ? (
                    <video
                      src={getVideoUrl(short)}
                      controls
                      autoPlay
                      className="w-full h-full object-contain bg-black"
                      onClick={(e) => e.stopPropagation()}
                    />
                  ) : (
                    <>
                      <img
                        src={`/placeholder.svg?height=400&width=225&query=YouTube+Short+video+preview+thumbnail`}
                        alt={short.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                        <div
                          className={`w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center transition-transform ${selectedShorts.includes(index) ? "scale-100" : "group-hover:scale-100 scale-0"
                            }`}
                        >
                          {selectedShorts.includes(index) ? "✓" : "▶"}
                        </div>
                        {/* Play Button Overlay (only visible if not selected, or maybe always accessible?) 
                            Let's make a specific play button area or just clicking center plays if not selection mode?
                            Actually, let's add a explicit play button in the center that stops propagation to avoid selection toggle if clicked.
                        */}
                        <button
                          className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
                          onClick={(e) => {
                            e.stopPropagation()
                            setPlayingShortIndex(index)
                          }}
                        >
                          <div className="w-12 h-12 rounded-full bg-black/50 text-white flex items-center justify-center backdrop-blur-sm hover:scale-110 transition-transform">
                            ▶
                          </div>
                        </button>
                      </div>
                      {short.url && (
                        <div className="absolute top-3 left-3 bg-green-500 text-white text-xs font-semibold px-2 py-1 rounded">
                          Uploaded
                        </div>
                      )}
                      <div className="absolute top-3 right-3 bg-foreground text-background text-xs font-semibold px-2 py-1 rounded">
                        {short.end_time - short.start_time > 60
                          ? Math.floor((short.end_time - short.start_time) / 60) + "m"
                          : Math.round(short.end_time - short.start_time) + "s"}
                      </div>
                    </>
                  )}
                </div>

                {/* Content */}
                <div className="p-4" onClick={() => toggleShort(index)}>
                  <h3 className="font-semibold text-foreground mb-3 text-sm line-clamp-2 group-hover:text-primary transition-colors">
                    {short.title}
                  </h3>

                  <div className="space-y-3 mb-4">
                    {/* Topic */}
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Topic</p>
                      <p className="text-xs text-foreground font-medium">{short.topic}</p>
                    </div>

                    {/* Category & Virality Score */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-muted-foreground mb-1">Category</p>
                        <p className="text-xs text-foreground">{short.content_category}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-muted-foreground mb-1">Virality</p>
                        <p className={`text-lg font-bold ${getEngagementColor(short.virality_score)}`}>
                          {short.virality_score}
                          <span className="text-xs">/10</span>
                        </p>
                      </div>
                    </div>

                    {/* Tags */}
                    <div>
                      <p className="text-xs text-muted-foreground mb-1">Tags</p>
                      <p className="text-xs text-foreground line-clamp-2">{short.tags}</p>
                    </div>

                    {/* YouTube URL if uploaded */}
                    {short.url && (
                      <div onClick={(e) => e.stopPropagation()}>
                        <p className="text-xs text-muted-foreground mb-1">YouTube Link</p>
                        <a
                          href={short.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-primary hover:underline"
                        >
                          View on YouTube
                        </a>
                      </div>
                    )}

                    {/* Video Path Info */}
                    <div className="pt-2 border-t border-border">
                      <p className="text-xs text-muted-foreground mb-1">{short.url ? "YouTube URL" : "Video File"}</p>
                      <p className="text-xs text-foreground break-all">{short.url || short.subtitleAddedVideo}</p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 flex-col sm:flex-row">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-border hover:bg-muted flex-1 bg-transparent"
                      onClick={(e) => {
                        e.stopPropagation()
                        // Handle download
                        window.open(getVideoUrl(short), '_blank')
                      }}
                    >
                      <Download className="w-3 h-3 mr-1" />
                      Download
                    </Button>
                    {short.url && (
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-border hover:bg-muted flex-1 bg-transparent"
                        onClick={(e) => {
                          e.stopPropagation()
                          navigator.clipboard.writeText(short.url || "")
                          alert("Link copied!")
                        }}
                      >
                        <Share2 className="w-3 h-3 mr-1" />
                        Share
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-3">Ready to go live?</h2>
            <p className="text-muted-foreground mb-6">
              {autoUpload
                ? "Your shorts are being uploaded to YouTube automatically!"
                : "Upload your selected shorts to YouTube and watch your channel grow"}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {!autoUpload && (
                <Button
                  onClick={handleUploadSelected}
                  disabled={selectedShorts.length === 0 || isUploading}
                  className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 disabled:opacity-50"
                >
                  Upload {selectedShorts.length} Selected Shorts
                </Button>
              )}
              <Button variant="outline" className="border-border hover:bg-muted px-8 py-6 bg-transparent">
                Create More Shorts
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
