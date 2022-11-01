/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
		domains: ["res.cloudinary.com", "regalosterrakota.com", "tailwindui.com" , "lh3.googleusercontent.com", "placeimg.com"],
	},
}

module.exports = nextConfig
