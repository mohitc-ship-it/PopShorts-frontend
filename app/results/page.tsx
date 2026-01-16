import { Suspense } from "react"
import ResultsContent from "@/components/results-content"

export default function ResultsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Suspense fallback={null}>
        <ResultsContent />
      </Suspense>
    </main>
  )
}
