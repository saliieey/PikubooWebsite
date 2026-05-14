import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'ixgo1ivq', // Found in your sanity.cli.js
  dataset: 'production',
  useCdn: true, // Use CDN for faster, cached responses
  apiVersion: '2023-05-03', // Use current date for latest API version
});

// Helper function to generate image URLs from Sanity image records
const builder = imageUrlBuilder(client);

export const urlFor = (source) => {
  return builder.image(source);
};
