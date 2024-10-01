/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'img.freepik.com', // Correct hostname for the image
          port: '',
          pathname: '/**', // Allow all paths under this hostname
        },
        {
          protocol: 'https',
          hostname: 'cdn.sanity.io', // Correct hostname for the image
          port: '',
          pathname: '/**', // Allow all paths under this hostname
        },
        
      ],
    },
  };
  
  export default nextConfig;
  