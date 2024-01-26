import type { AppProps } from "next/app";
import AppLayout from "@/layouts/AppLayout";
import "@/styles/globals.css";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider attribute="class">
			<AppLayout>
				<Component {...pageProps} />
			</AppLayout>
		</ThemeProvider>
	);
}

export default MyApp;
