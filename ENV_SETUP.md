# Environment Configuration

This project uses environment variables to configure the backend API URL.

## Setup

1. Copy the example environment file:
   ```bash
   cp .env.example .env.local
   ```

2. Update the `NEXT_PUBLIC_BACKEND_URL` value in `.env.local` to point to your backend server:
   ```
   NEXT_PUBLIC_BACKEND_URL=http://localhost:8000
   ```

   **Note:** For production, update this to your production backend URL (e.g., `https://api.yourapp.com`)

## Environment Variables

### `NEXT_PUBLIC_BACKEND_URL`

- **Type:** String
- **Default:** `http://localhost:8000`
- **Description:** The base URL for the backend API server
- **Example:** `http://localhost:8000` or `https://api.yourapp.com`

**Important:** The `NEXT_PUBLIC_` prefix makes this variable accessible in the browser. Never put sensitive information (like API keys or secrets) in variables with this prefix.

## Usage

The backend URL is centralized in `lib/config.ts` and used throughout the application via the `apiEndpoints` object:

```typescript
import { apiEndpoints } from '@/lib/config'

// Process video endpoint
fetch(apiEndpoints.processVideo, { ... })

// Upload video endpoint
fetch(apiEndpoints.uploadVideo, { ... })
```

## Development Server

After updating your `.env.local` file, restart the development server for changes to take effect:

```bash
npm run dev
```

## File Locations

- **`.env.local`** - Your local environment variables (not committed to git)
- **`.env.example`** - Example template for environment variables (committed to git)
- **`lib/config.ts`** - Centralized configuration and API endpoints
- **`app/api/process-video/route.ts`** - Video processing API route
- **`app/api/upload-video/route.ts`** - Video upload API route

## Notes

- The `.env.local` file is gitignored and will not be committed to version control
- Make sure your backend server is running at the configured URL
- All API routes automatically use the configured backend URL
