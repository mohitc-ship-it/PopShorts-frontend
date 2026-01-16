import { apiEndpoints } from '@/lib/config'

export async function POST(request: Request) {
  try {
    const { shortId, videoPath, title, description, tags } = await request.json()

    // Call the backend API to upload the video
    const response = await fetch(apiEndpoints.uploadVideo, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        shortId,
        videoPath,
        title,
        description,
        tags,
      }),
    })

    if (!response.ok) {
      throw new Error(`Backend API error: ${response.statusText}`)
    }

    const data = await response.json()
    return Response.json(data)
  } catch (error) {
    console.error('Error uploading video:', error)
    return Response.json({ success: false, error: String(error) }, { status: 500 })
  }
}


