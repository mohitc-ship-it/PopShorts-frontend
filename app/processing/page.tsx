"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

interface ProcessingStep {
  name: string
  completed: boolean
  active: boolean
}

const PROCESSING_STEPS = [
  "Transcribing video",
  "Finding viral moments",
  "Creating Shorts",
  "Adding subtitles",
  "Writing titles & hashtags",
  "Publishing to YouTube",
]

export default function ProcessingPage() {
  const router = useRouter()
  const [steps, setSteps] = useState<ProcessingStep[]>(
    PROCESSING_STEPS.map((name, index) => ({
      name,
      completed: false,
      active: index === 0,
    })),
  )
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // Simulate processing steps
    let currentStep = 0
    const interval = setInterval(() => {
      if (currentStep < PROCESSING_STEPS.length) {
        setSteps((prevSteps) =>
          prevSteps.map((step, index) => ({
            ...step,
            completed: index < currentStep,
            active: index === currentStep,
          })),
        )
        setProgress(((currentStep + 1) / PROCESSING_STEPS.length) * 100)
        currentStep++
      } else {
        clearInterval(interval)
        // Navigate to results page after processing
        setTimeout(() => {
          router.push("/results")
        }, 1500)
      }
    }, 1200)

    return () => clearInterval(interval)
  }, [router])

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        {/* Loading Animation */}
        <div className="text-center mb-12">
          <div className="mb-8 flex justify-center">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 rounded-full border-4 border-border"></div>
              <div
                className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary border-r-primary animate-spin"
                style={{ animationDuration: "2s" }}
              ></div>
            </div>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Your video is turning into viral Shorts…</h1>
          <p className="text-muted-foreground">This usually takes 1-2 minutes</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-10">
          <div className="w-full bg-border rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-center text-sm text-muted-foreground mt-3">{Math.round(progress)}%</p>
        </div>

        {/* Processing Steps */}
        <div className="space-y-3">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center gap-3">
              <div
                className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center font-semibold text-sm transition-all ${
                  step.completed
                    ? "bg-primary text-primary-foreground"
                    : step.active
                      ? "bg-primary text-primary-foreground animate-pulse"
                      : "bg-border text-muted-foreground"
                }`}
              >
                {step.completed ? "✓" : step.active ? "•" : index + 1}
              </div>
              <span
                className={`transition-colors ${
                  step.completed || step.active ? "text-foreground font-medium" : "text-muted-foreground"
                }`}
              >
                {step.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
