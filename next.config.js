/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "picsum.photos",
				pathname: "/300/**",
			},
		],
	},
};

module.exports = nextConfig
