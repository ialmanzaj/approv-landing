/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'images.uifaces.co',
        pathname: '**',
      },
      {
        protocol: 'https' ,
        hostname: 'i.pravatar.cc',
        pathname: '**',
      }
    ],
  },
}

export default nextConfig; 