declare namespace NodeJS {
  export interface ProcessEnv {
    readonly NODE_ENV?: 'development' | 'production' | 'test'
    readonly PORT?: string
    readonly CI?: string
    readonly BETTER_AUTH_SECRET?: string
    readonly BETTER_AUTH_URL?: string
    readonly MONGODB_URI?: string
  }
}
