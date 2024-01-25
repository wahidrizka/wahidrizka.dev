import clsx from "clsx";
import { Html, Head, Main, NextScript } from "next/document";

const AppDocument = () => {
	return (
		<Html lang="en" className="dark">
			<Head>
				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
			</Head>
			<body className={clsx("antialiased bg-white dark:bg-slate-900")}>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default AppDocument;
