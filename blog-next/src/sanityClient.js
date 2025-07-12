import { createClient } from '@sanity/client';

const client = createClient({
  projectId: "5zeu6m9a",    // your new Sanity project ID
  dataset: "production",    // your dataset name
  useCdn: false,            // `false` if you want to ensure fresh data
  apiVersion: "2023-01-01", // or whatever API version you prefer
});

export default client;
