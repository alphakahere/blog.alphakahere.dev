import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { AnimatePresence } from "framer-motion";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider attribute="class">
			<AnimatePresence
				mode="sync"
				initial={false}
				onExitComplete={() => window.scrollTo(0, 0)}
			>
				<Component {...pageProps} />
			</AnimatePresence>
		</ThemeProvider>
	);
}
