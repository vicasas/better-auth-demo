import { betterAuth } from 'better-auth'
import { mongodbAdapter } from 'better-auth/adapters/mongodb'
import clientPromise from '@/db'

const resolvedClient = await clientPromise // Ensure we are waiting for the DB connection
const db = resolvedClient.db() // Access the database instance

export const auth = betterAuth({
  appName: 'Better Auth Demo',
  database: mongodbAdapter(db),
  emailAndPassword: { enabled: true },
  user: {
    additionalFields: {
      extraEmailsOptIn: { type: 'boolean', required: false, default: false },
    },
  },
})
