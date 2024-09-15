import type { AppProps } from "next/app";
import '@primer/react-brand/lib/css/main.css';
import '@primer/react-brand/fonts/fonts.css';
import "@primer/css/index.scss";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
