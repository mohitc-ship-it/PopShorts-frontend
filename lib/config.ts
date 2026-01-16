/**
 * Configuration for the application
 * Centralizes environment variables and configuration settings
 */

export const config = {
    /**
     * Backend API base URL
     * Can be configured via NEXT_PUBLIC_BACKEND_URL environment variable
     * Default: http://localhost:8000
     */
    backendUrl: process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:8000',
} as const

/**
 * API endpoints
 */
export const apiEndpoints = {
    processVideo: `${config.backendUrl}/process-video`,
    uploadVideo: `${config.backendUrl}/upload-video`,
} as const
