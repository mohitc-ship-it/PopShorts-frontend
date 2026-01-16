import { apiEndpoints } from '@/lib/config'

export async function POST(request: Request) {
  try {
    const formData = await request.formData()

    // Call the backend API to process the video
    // We forward the formData directly. Browser/fetch will set the correct Content-Type with boundary.
    const response = await fetch(apiEndpoints.processVideo, {
      method: 'POST',
      body: formData,
    })

    if (!response.ok) {
      const errorText = await response.text()
      throw new Error(`Backend API error: ${response.status} ${errorText}`)
    }

    const data = await response.json()
    return Response.json(data)
  } catch (error) {
    console.error('Error processing video:', error)
    return Response.json({ success: false, error: String(error) }, { status: 500 })
  }
}

