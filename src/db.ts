import { MongoClient, ServerApiVersion, MongoClientOptions } from 'mongodb'

const uri = process.env.MONGODB_URI

if (!uri) {
  throw new Error('❌ The environment variable MONGODB_URI is missing.')
}

const options: MongoClientOptions = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
}

let client: MongoClient
let clientPromise: Promise<MongoClient>

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined
}

if (process.env.NODE_ENV !== 'production') {
  // In development and test, prevent multiple instances of MongoClient
  if (!globalThis._mongoClientPromise) {
    client = new MongoClient(uri, options)
    globalThis._mongoClientPromise = client.connect()
  }

  clientPromise = globalThis._mongoClientPromise
} else {
  // In production, avoid using a global variable and handle the connection directly
  client = new MongoClient(uri, options)
  clientPromise = client.connect()
}

export default clientPromise
