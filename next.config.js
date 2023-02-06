/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify:true,
  images:{
    domains:['https://rickandmortyapi.com']
  }
  
}

module.exports = nextConfig
