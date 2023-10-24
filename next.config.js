/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	env: {
		token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
	},
	images: {
		remotePatterns: [
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
