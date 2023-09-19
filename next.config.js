/** @type {import('next').NextConfig} */
const BASE_URL = "blog.alphakahere.dev";

const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "picsum.photos",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "cdn.sanity.io",
				pathname: "/**",
			},
			{
				protocol: "https",
				hostname: "i.imgur.com",
				pathname: "/**",
			},
		],
	},
};

module.exports = nextConfig;
