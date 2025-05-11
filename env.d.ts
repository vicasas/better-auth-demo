declare namespace NodeJS {
  export interface ProcessEnv {
    readonly NODE_ENV?: 'development' | 'production' | 'test'
    readonly PORT?: string
    readonly CI?: string
  }
}
