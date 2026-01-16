import { apiEndpoints } from '@/lib/config'

export async function POST(request: Request) {
  try {
    const { videoPath, numberOfShorts, autoUpload } = await request.json()

    // Call the backend API to process the video
    const response = await fetch(apiEndpoints.processVideo, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        videoPath,
        numberOfShorts,
        autoUpload,
        sequential: true
      }),
    })

    if (!response.ok) {
      throw new Error(`Backend API error: ${response.statusText}`)
    }

    const data = await response.json()
    return Response.json(data)
  } catch (error) {
    console.error('Error processing video:', error)
    return Response.json({ success: false, error: String(error) }, { status: 500 })
  }
}

