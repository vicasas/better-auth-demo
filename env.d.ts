declare namespace NodeJS {
  export interface ProcessEnv {
    readonly NODE_ENV?: 'development' | 'production' | 'test'
    readonly PORT?: string
    readonly CI?: string
    readonly BETTER_AUTH_SECRET?: string
    readonly BETTER_AUTH_URL?: string
    readonly MONGODB_URI?: string
    readonly RESEND_API_KEY?: string
    readonly RESEND_FROM_EMAIL?: string
    readonly RESEND_OVERRIDE_TO_EMAIL?: string
  }
}
