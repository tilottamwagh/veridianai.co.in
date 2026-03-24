import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Veridian AI Tech | Enterprise Solutions',
    short_name: 'Veridian AI',
    description: 'Intelligent AI Systems delivering measurable outcomes in 90 days.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0B0F19',
    theme_color: '#0B0F19',
    orientation: 'portrait',
    icons: [
      {
        src: '/favicon.ico',
        sizes: '192x192',
        type: 'image/x-icon',
      }
    ],
  }
}
