import { Storage } from '@google-cloud/storage';

// Google SDK automatically reads the GOOGLE_APPLICATION_CREDENTIALS environment variable
const storage = new Storage({
  projectId: process.env.GCP_PROJECT_ID,
});

export const bucket = storage.bucket(process.env.GCP_BUCKET_NAME!);
