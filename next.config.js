/** @type {import('next').NextConfig} */
const NEXT_PUBLIC_SANITY_TOKEN =
	"sk0cqECj9pbdGYqgxWpFooxFvGFSTwFVWkU8Qm0EPTGBZoeuCKx8ysXtj6RjMoMSEUEj1fw5zz0eLQiDNsrNV5r3KmwhTVplaTO2bqEInCheQAmruEh4Ew4K40s4Fo55WGtYBWa20FqF9UxuqVZLUITxaW1CTtHFxJdRFNgDzIB1VWatj3aq";
const nextConfig = {
	reactStrictMode: true,
	env: {
		NEXT_PUBLIC_SANITY_TOKEN,
	},
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
		],
	},
};

module.exports = nextConfig;
