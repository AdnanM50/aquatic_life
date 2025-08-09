import { MongoClient, Db } from 'mongodb';

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your MongoDB URI to .env.local');
}

const uri = process.env.MONGODB_URI;
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;
let isConnected = false;
let connectionError: string | null = null;

// Initialize connection
if (process.env.NODE_ENV === 'development') {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  let globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
    _mongoConnectionStatus?: { isConnected: boolean; error: string | null };
  };

  if (!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri, options);
    globalWithMongo._mongoClientPromise = client.connect()
      .then((connectedClient) => {
        isConnected = true;
        globalWithMongo._mongoConnectionStatus = { isConnected: true, error: null };
        console.log('✅ MongoDB connected successfully');
        return connectedClient;
      })
      .catch((error) => {
        isConnected = false;
        connectionError = error.message;
        globalWithMongo._mongoConnectionStatus = { isConnected: false, error: error.message };
        console.error('❌ MongoDB connection failed:', error.message);
        throw error;
      });
  }
  clientPromise = globalWithMongo._mongoClientPromise;
  if (globalWithMongo._mongoConnectionStatus) {
    isConnected = globalWithMongo._mongoConnectionStatus.isConnected;
    connectionError = globalWithMongo._mongoConnectionStatus.error;
  }
} else {
  // In production mode, it's best to not use a global variable.
  client = new MongoClient(uri, options);
  clientPromise = client.connect()
    .then((connectedClient) => {
      isConnected = true;
      console.log('✅ MongoDB connected successfully');
      return connectedClient;
    })
    .catch((error) => {
      isConnected = false;
      connectionError = error.message;
      console.error('❌ MongoDB connection failed:', error.message);
      throw error;
    });
}

export default clientPromise;

export async function getDatabase(): Promise<Db> {
  try {
    const client = await clientPromise;
    isConnected = true;
    connectionError = null;
    return client.db(process.env.MONGODB_DB || 'aqualife');
  } catch (error) {
    isConnected = false;
    connectionError = error instanceof Error ? error.message : 'Unknown error';
    throw error;
  }
}

// Database health check function
export async function checkDatabaseHealth(): Promise<{
  status: 'connected' | 'disconnected' | 'error';
  message: string;
  timestamp: Date;
}> {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB || 'aqualife');
    
    // Ping the database
    await db.admin().ping();
    
    isConnected = true;
    connectionError = null;
    
    return {
      status: 'connected',
      message: 'Database is connected and responsive',
      timestamp: new Date()
    };
  } catch (error) {
    isConnected = false;
    connectionError = error instanceof Error ? error.message : 'Unknown error';
    
    return {
      status: 'error',
      message: `Database connection failed: ${connectionError}`,
      timestamp: new Date()
    };
  }
}

// Get current connection status
export function getConnectionStatus(): {
  isConnected: boolean;
  error: string | null;
} {
  return {
    isConnected,
    error: connectionError
  };
}