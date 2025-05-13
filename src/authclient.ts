import { inferAdditionalFields } from 'better-auth/client/plugins'
import { createAuthClient } from 'better-auth/react'
import { auth } from '@/auth'

export const authClient = createAuthClient({
  plugins: [inferAdditionalFields<typeof auth>()],
})
